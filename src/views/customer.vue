<template>
  <div class="overflow-x-hidden">
    <header class="p-3 text-bg-dark sticky-top" id="navbar">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <i class="bi bi-building me-3"></i>

          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-white" @click.prevent="scrollDown('productsList')">商品列表</a></li>
            <li><a href="#" class="nav-link px-2 text-white" @click.prevent="scrollDown('cart')">購物車</a></li>
            <li><a href="#" class="nav-link px-2 text-white" @click.prevent="scrollDown('order')">送出訂單</a></li>
          </ul>

          <button type="button" class="btn btn-outline-light">
            <RouterLink class="nav-link" to="/login">管理者登入</RouterLink>
          </button>
        </div>
      </div>
    </header>
    <!-- ProductsList -->
    <div id="productsList" class="row px-5 m-0 mt-3">
      <h1><i class="bi bi-box2 fs-1 me-2"></i>商品列表</h1>
      <hr>
      <div class="col-md-4 col-sm-6 mb-4" v-for="item in products" :key="item.id">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top cardImage" alt="">
          <div class="card-body">
            <span class="badge text-bg-secondary mb-2">
              {{ item.category }}
            </span>
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <div class="d-flex justify-content-between align-items-center">
              <del class="h6">原價 {{ currencyFilter(item.origin_price) }}</del>
              <div class="h5">現在只要 {{ currencyFilter(item.price) }}</div>
            </div>
          </div>
          <div class="card-footer d-flex gap-3">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="getSingleProduct(item.id)">
              查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="addToCart(item.id)">
              加到購物車
            </button>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <Pagination :pagination="pagination" @getData="getProduct"></Pagination>
    </div>

    <!-- Cart -->
    <div id="cart" class="mt-3 px-5 row">
      <h1><i class="bi bi-cart fs-1 me-2"></i>購物車</h1>
      <hr />
      <div class="mx-auto col-md-10 col-12">
        <table class="table text-center align-middle">
          <thead class="table-dark">
            <tr>
              <th>刪除</th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in carts.carts" :key="item.id">
              <td>
                <button class="btn btn-danger" @click="deleteCart(item.id)">
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td>
                {{ item.qty }} / {{ item.product.unit }}
              </td>
              <td>
                {{ currencyFilter(item.product.price * item.qty) }}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="py-4">總計</td>
              <td>
                {{ currencyFilter(carts.total) }}
              </td>
            </tr>
            <tr v-if="carts.final_total !== carts.total">
              <td></td>
              <td></td>
              <td class="text-primary py-4">折扣價</td>
              <td class="text-primary">
                {{ currencyFilter(carts.final_total) }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Coupon -->
        <div class="input-group mb-3 input-group-sm">
          <input type="text" class="form-control" v-model="couponCode" placeholder="請輸入優惠碼" />
          <div class="input-group-append">
            <button class="btn btn-outline-primary" @click="addCoupon" type="button">
              套用優惠碼
            </button>
          </div>
        </div>
      </div>
    </div>


    <!-- Order information -->
    <div id="order" class="mt-3 px-5">
      <h1><i class="bi bi-list-task fs-1 me-2"></i>送出訂單</h1>
      <hr />
      <div class="my-5 row justify-content-center">
        <div class="col-md-6">
          <VForm @submit="createOrder" class="d-flex flex-column gap-3" v-slot="{ meta, errors }">
            <div>
              <label for="useremail"><span class="text-danger">*</span> Email</label>
              <VField type="email" rules="required|email" class="form-control" name="email" id="useremail"
                placeholder="請輸入 Email" :class="{ 'is-invalid': errors.email }" />
              <VErrorMessage name="email" class="text-danger" />
            </div>

            <div>
              <label for="username"><span class="text-danger">*</span> 收件人姓名</label>
              <VField type="text" rules="required" class="form-control" name="name" id="username" placeholder="輸入姓名"
                :class="{ 'is-invalid': errors.name }" />
              <VErrorMessage name="name" class="text-danger" />
            </div>

            <div>
              <label for="usertel"><span class="text-danger">*</span> 收件人電話</label>
              <VField type="tel" rules="required|numeric" class="form-control" name="tel" id="usertel" placeholder="請輸入電話"
                :class="{ 'is-invalid': errors.tel }" />
              <VErrorMessage name="tel" class="text-danger" />
            </div>

            <div>
              <label for="useraddress"><span class="text-danger">*</span> 收件人地址</label>
              <VField type="text" rules="required" class="form-control" name="address" id="useraddress"
                placeholder="請輸入地址" :class="{ 'is-invalid': errors.address }" />
              <VErrorMessage name="address" class="text-danger" />
            </div>

            <div>
              <label for="comment">留言</label>
              <VField as="textarea" name="message" id="comment" class="form-control" cols="30" rows="10" />
            </div>
            <div class="text-right">
              <button class="btn btn-danger me-3" type="reset">重設</button>
              <button class="btn btn-primary" id="createOrderButton" type="submit"
                :class="{ 'disabled': !meta.valid }">送出訂單</button>
            </div>
          </VForm>
        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{ singleProduct.title }}</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <img :src="singleProduct.imageUrl" alt="" class="img-fluid modalImage" />
            <blockquote class="blockquote mt-3">
              <p class="mt-0">{{ singleProduct.content }}</p>
              <footer class="blockquote-footer text-right">
                {{ singleProduct.description }}
              </footer>
            </blockquote>
            <div class="d-flex justify-content-between aline-items-baseline">
              <div class="h4" v-if="!singleProduct.price">
                {{ singleProduct.origin_price }}
              </div>
              <del class="h6" v-if="singleProduct.price">
                {{ currencyFilter(singleProduct.origin_price) }}
              </del>
              <div class="h4" v-if="singleProduct.price">
                {{ currencyFilter(singleProduct.price) }}
              </div>
            </div>
            <select class="form-control mt-3" v-model="singleProduct.num">
              <option :value="num" v-for="num in 10" :key="num">
                {{ num }} {{ singleProduct.unit }}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小記 <strong> {{ singleProduct.num * singleProduct.price }} </strong> 元
            </div>
            <button class="btn btn-primary" @click="addToCart(singleProduct.id, singleProduct.num)">
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import * as bootstrap from "bootstrap";
import { RouterLink } from 'vue-router';

import Pagination from "../components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      singleProduct: {},
      carts: [],
      couponCode: "",
      pagination: {},
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProduct(page = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/products?page=${page}`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);
      vm.products = [];

      axios.get(api).then((res) => {
        res.data.products.forEach((item) => {
          if (item.is_enabled) {
            vm.products.push(item);
          }
        });
        vm.pagination = res.data.pagination;
        this.$switchLoadingStatus.switchLoadingStatus(false);
      });
    },
    getSingleProduct(id) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/product/${id}`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.get(api).then((res) => {
        vm.singleProduct = res.data.product;
        vm.singleProduct.num = 1;
        this.$switchLoadingStatus.switchLoadingStatus(false);
        new bootstrap.Modal('#productModal').show();
      });
    },
    getCart() {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/cart`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.get(api).then((res) => {
        vm.carts = res.data.data;
        this.$switchLoadingStatus.switchLoadingStatus(false);
      });
    },
    scrollDown(id) {
      let scroll = $(`#${id}`).offset().top - $('#navbar').outerHeight() - 16;
      $('html').scrollTop(scroll)
    },
    addToCart(id, qty = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/cart`;
      this.$switchLoadingStatus.switchLoadingStatus(true);
      let cart = {
        product_id: id,
        qty: qty,
      };

      axios.post(api, { data: cart }).then((res) => {
        this.$switchLoadingStatus.switchLoadingStatus(false);
        bootstrap.Modal.getOrCreateInstance('#productModal').hide();
        this.getCart();
      });
    },
    deleteCart(id) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/cart/${id}`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.delete(api).then((res) => {
        vm.getCart();
        this.$switchLoadingStatus.switchLoadingStatus(false);
      });
    },
    addCoupon() {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/coupon`;
      const vm = this;
      let sendCoupon = { code: vm.couponCode };
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.post(api, { data: sendCoupon }).then((res) => {
        if (res.data.success) {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "success" });
          vm.getCart();
        } else {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "danger" });
        }
        this.$switchLoadingStatus.switchLoadingStatus(false);
      });
    },
    createOrder(value) {
      let form = {
        user: {
          name: value.name,
          email: value.email,
          tel: value.tel,
          address: value.address,
        },
        message: value.message,
      };

      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/order`;
      const vm = this;

      if (!vm.carts.carts[0]) {
        this.$mittBus.emit("message:push", { message: "購物車內無商品，請先去購買", status: "danger" });
      } else {
        this.$switchLoadingStatus.switchLoadingStatus(true);
        axios.post(api, { data: form }).then((res) => {
          if (res.data.success) {
            this.$mittBus.emit("message:push", { message: res.data.message, status: "success" });
            vm.$router.push(`/customerCheckout/${res.data.orderId}`)
          } else {
            this.$mittBus.emit("message:push", { message: res.data.message, status: "danger" });
          }
          this.$switchLoadingStatus.switchLoadingStatus(false);
          vm.getCart();
        });
      }


    },
    currencyFilter(num) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NTD",
      }).format(num);
    }
  },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>

<style scoped>
.card {
  height: 550px;
}

.cardImage {
  height: 300px;
  object-fit: cover;
}

.modalImage {
  display: block;
  margin: 0 auto;
}

i {
  font-size: 24px;
}

@media (max-width: 768px) {
  .card {
    height: auto;
  }
}
</style>
