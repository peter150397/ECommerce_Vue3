<template>
  <div>
    <div class="d-flex justify-content-evenly mt-4 text-white">
      <div class="p-4 bg-success rounded-3">
        <h4>已收金額</h4>
        <h1>{{ currencyFilter(totalIncome) }}</h1>
      </div>
      <div class="p-4 bg-danger rounded-3">
        <h4>待收帳款</h4>
        <h1>{{ currencyFilter(totalDebt) }}</h1>
      </div>
    </div>
    <table class="table mt-4 table-hover align-middle">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th style="width:40%">購買項目</th>
          <th>購買數量</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ getDate(item.create_at) }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <p v-for="product in item.products" :key="product.id">
              <!-- {{ findProductById(product.product_id).title }} -->
              {{ product.product.title }}
            </p>
          </td>
          <td>
            <p v-for="product in item.products" :key="product.id">
              <!-- {{ product.qty }} {{ findProductById(product.product_id).unit }} -->
              {{ product.qty }} {{ product.product.unit }}
            </p>
          </td>
          <td>
              {{ currencyFilter(item.total) }}
          </td>
          <td>
            <p v-if="item.is_paid" class="is_paid text-center mb-0">已付款</p>
            <p v-if="!item.is_paid" class="not_paid text-center mb-0">未付款</p>
          </td>
          <td>
            <button v-if="!item.is_paid" class="btn btn-primary" @click="payOrder(item.id)">查看付款狀況</button>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pagination="pagination" @getData="getOrderList"></Pagination>
  </div>
</template>

<script>
import axios from "axios";

import Pagination from '../components/Pagination.vue';
import { useIsFormTouched } from "vee-validate";

export default {
  data() {
    return {
      orders: [],
      products: [],
      pagination: {},
      totalIncome: 0,
      totalDebt: 0,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrderList(page = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/orders?page=${page}`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.get(api).then((res) => {
        // 取得原始訂單列表
        vm.orders = Object.assign([], res.data.orders);
        vm.orders.forEach((order) => {
          // 將訂單內的購買商品改成陣列形式
          let ObjToArray = Object.values(order.products);
          // 裝入商品ID 以利於判斷新陣列中是否有重複商品了
          let productIdArray = [];
          // 新陣列
          let tempArray = [];
          ObjToArray.forEach((product)=> {
            // 如果該商品ID尚未加入ID陣列，則將商品加入新陣列，並且將該商品ID加入ID陣列
            if(productIdArray.indexOf(product.product_id) === -1) {
              productIdArray.push(product.product_id);
              tempArray.push(product);
            // 如果該商品ID已經加入ID陣列，則搜尋相同ID之商品，並將數量、打折後總金額、總金額加入相同ID之商品中
            }else{
              tempArray.forEach((filterproduct) => {
                if(filterproduct.product_id === product.product_id){
                  filterproduct.final_total += product.final_total;
                  filterproduct.total += product.total;
                  filterproduct.qty += product.qty;
                }
              })
            }
          })
          order.products = tempArray;
        })
        vm.pagination = Object.assign({}, res.data.pagination);

        vm.getIncomeAndDebt(res.data.pagination.total_pages);
      });
    },
    getIncomeAndDebt(totalPages) {
      this.totalIncome = 0;
      this.totalDebt = 0;

      for (let index = 1; index <= totalPages; index++) {
        const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/orders?page=${index}`;
        axios.get(api).then((res) => {
          res.data.orders.forEach((item) => {
            if (item.is_paid) {
              this.totalIncome += item.total
            } else {
              this.totalDebt += item.total
            }
          })
        });
      }
      this.$switchLoadingStatus.switchLoadingStatus(false);
    },
    getProducts() {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/products/all`;
      const vm = this;

      axios.get(api).then((res) => {
        vm.products = res.data.products;
      });
    },
    payOrder(id) {
      this.$router.push(`/admin/customerCheckout/${id}`)
    },
    getDate(e) {
      let date = new Date(e * 1000);

      let years = date.getFullYear();
      let months = date.getMonth() + 1;
      let days = date.getDate();

      return `${years}/${months}/${days}`;
    },
    currencyFilter(num) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NTD",
      }).format(num);
    }
  },

  created() {
    this.getOrderList();
    this.getProducts();
  },
};
</script>

<style scoped>
.is_paid {
  color: green;
  font-weight: bold;
}

.not_paid {
  color: red;
  font-weight: bold;
}

td > p:last-child{
  margin: 0;
}
</style>