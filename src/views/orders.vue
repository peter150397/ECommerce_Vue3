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
              {{ findProductById(product.product_id).title }}
            </p>
          </td>
          <td>
            <p v-for="product in item.products" :key="product.id">
              {{ product.qty }} {{ findProductById(product.product_id).unit }}
            </p>
          </td>
          <td>
            <p class="text-right">
              {{ currencyFilter(item.total) }}
            </p>
          </td>
          <td>
            <span v-if="item.is_paid" class="is_paid">已付款</span>
            <span v-if="!item.is_paid" class="not_paid">未付款</span>
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
        vm.orders = Object.assign([], res.data.orders);
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
    findProductById(e) {
      const vm = this;
      let filterProducts = vm.products.find((item) => {
        if (e === item.id) {
          return true;
        }
      });

      return filterProducts;
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
</style>