<template>
  <div>
    <div class="my-5 mx-3 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle mb-4">
          <thead>
            <tr>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>
                {{ item.qty }}/{{ item.product.unit }}
              </td>
              <td>{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">總計</td>
              <td>{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table align-middle mb-4">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-right" v-if="order.is_paid === false">
          <button type="submit" class="btn btn-primary">確認付款去</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/order/${vm.orderId}`;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.get(api).then((res) => {
        this.$switchLoadingStatus.switchLoadingStatus(false);
        vm.order = res.data.order;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/pay/${vm.orderId}`;

      axios.post(api).then((res) => {
        vm.getOrder();
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>