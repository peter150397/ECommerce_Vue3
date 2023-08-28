<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light">
    <div class="pt-3 fw-bold">
      <h5 class="px-3 my-4 text-muted fw-bold">管理員</h5>
      <ul class="nav flex-column">
        <li @click="active('products')">
          <RouterLink class="nav-link" to="/admin/products" :class="{ 'Active': isActive == 'products' }">產品列表</RouterLink>
        </li>
        <li @click="active('orders')">
          <RouterLink class="nav-link" to="/admin/orders" :class="{ 'Active': isActive == 'orders' }">訂單列表</RouterLink>
        </li>
        <li @click="active('coupons')">
          <RouterLink class="nav-link" to="/admin/coupons" :class="{ 'Active': isActive == 'coupons' }">優惠券</RouterLink>
        </li>
      </ul>

      <h5 class="px-3 my-4 text-muted fw-bold">模擬功能</h5>
      <ul class="nav flex-column">
        <li @click="active('customer')">
          <RouterLink class="nav-link" to="/admin/customer" :class="{ 'Active': isActive == 'customer' }">模擬訂單</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      isActive: "products",
    };
  },
  methods: {
    active(e) {
      this.isActive = e;
    },
  },
};
</script>

<style scoped>
a{
  border-radius: 10px;
}

.Active , .Active:focus{
  background-color: #0d6efd;
  color: white;
}
.Active:hover{
  background-color: #0a58ca;
  color: white;
}
</style>