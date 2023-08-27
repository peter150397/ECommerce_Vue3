<template>
  <div>
    <loading :active="isLoading" />

    <table class="table mt-4 table-hover align-middle">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th style="width:50%">購買項目</th>
          <th>購買數量</th>
          <th>應付金額</th>
          <th>是否付款</th>
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
        </tr>
      </tbody>
    </table>

    <Pagination :pagination="pagination" @getData="getOrderList"></Pagination>
  </div>
</template>

<script>
import axios from "axios";

import Pagination from '../components/Pagination.vue';
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      orders: [],
      products: [],
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    Pagination,
    Loading
  },
  methods: {
    getOrderList(page = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;

      axios.get(api).then((res) => {
        vm.orders = res.data.orders
        vm.pagination = res.data.pagination;
        vm.isLoading = false;
      });
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