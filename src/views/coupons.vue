<template>
  <div>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新的優惠券
      </button>
    </div>

    <table class="table mt-4 table-hover align-middle">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id" :class="{ 'table-secondary': item.due_date * 1000 < new Date() }">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }} %</td>
          <td>{{ getDate(item.due_date) }} <span v-if="item.due_date * 1000 < new Date()">(已過期)</span></td>
          <td>
            <span v-if="item.is_enabled == 1" class="is_enabled">已啟用</span>
            <span v-else class="not_enabled">未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination :pagination="pagination" @getData="getCouponList"></Pagination>

    <!-- Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" aria-labelledby="couponModal" aria-hidden="true">
      <div class="modal-dialog modal-md">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h5 class="modal-title">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col d-flex flex-column gap-3">
                <div>
                  <label for="title">標題</label>
                  <input type="text" class="form-control" id="title" v-model="tempCoupon.title" placeholder="請輸入標題" />
                </div>

                <div>
                  <label for="coupon">優惠碼</label>
                  <input type="text" class="form-control" id="coupon" v-model="tempCoupon.code" placeholder="請輸入優惠碼" />
                </div>

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="expiryDate">到期日</label>
                    <input type="date" class="form-control" id="expiryDate" v-model="tempCoupon.due_date"
                      @change="changeToTimestamp(tempCoupon.due_date)" placeholder="請輸入日期" />
                  </div>

                  <div class="form-group col-md-6">
                    <label for="discount">折扣百分比</label>
                    <input type="number" class="form-control" id="discount" v-model="tempCoupon.percent"
                      placeholder="請輸入折扣" />
                  </div>
                </div>
                <div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" v-model="tempCoupon.is_enabled" :true-value="1"
                      :false-value="0" id="is_enabled" />
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="addCoupon">
              確認
            </button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
import axios from "axios";

import Pagination from "../components/Pagination.vue";

export default {
  data() {
    return {
      coupons: [],
      isNew: true,
      tempCoupon: {},
      pagination: {},
      tempTimestamp: 0,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getCouponList(page = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      this.$switchLoadingStatus.switchLoadingStatus(true);

      axios.get(api).then((res) => {
        let sortArray = res.data.coupons.sort((a, b) => {
          return a.due_date - b.due_date;
        });
        vm.coupons = sortArray;
        vm.pagination = res.data.pagination
        this.$switchLoadingStatus.switchLoadingStatus(false);
      });
    },
    changeToTimestamp(e) {
      const vm = this;
      let date = new Date(e);
      let timestamp = Math.floor(date.getTime() / 1000);

      vm.tempTimestamp = timestamp;
    },
    changeToDate(e) {
      let date = new Date(e * 1000);
      let years = date.getFullYear();
      let months;
      let days;
      // let months = date.getMonth() + 1;
      // let days = date.getDate();
      if (date.getMonth() + 1 < 10) {
        months = `0${date.getMonth() + 1}`;
      } else {
        months = date.getMonth() + 1;
      }

      if (date.getDate() < 10) {
        days = `0${date.getDate()}`;
      }else{
        days = date.getDate();
      }

      return `${years}-${months}-${days}`;
    },
    openModal(isNew, item) {
      const vm = this;
      vm.tempCoupon = Object.assign({}, item);

      if (isNew) {
        vm.isNew = true;
      } else {
        vm.isNew = false;
        vm.tempCoupon.due_date = vm.changeToDate(vm.tempCoupon.due_date);
      }

      new bootstrap.Modal('#couponModal').show();
    },
    addCoupon() {
      const vm = this;
      let api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/coupon`;
      let httpMethod = "post";

      if (!vm.isNew) {
        api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = "put";
      }

      vm.tempCoupon.due_date = vm.tempTimestamp;

      axios[httpMethod](api, { data: vm.tempCoupon }).then((res) => {
        if (res.data.success) {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "success" });
          bootstrap.Modal.getOrCreateInstance('#couponModal').hide();
        } else {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "danger" });
        }
        vm.getCouponList();
      });
    },
    deleteCoupon() {
      const vm = this;
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;

      axios.delete(api).then((res) => {
        if (res.data.success) {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "success" });
          bootstrap.Modal.getOrCreateInstance('#couponModal').hide();
        } else {
          this.$mittBus.emit("message:push", { message: res.data.message, status: "danger" });
        }
        vm.getCouponList();
      });
    },
    getDate(e) {
      let date = new Date(e * 1000);
      let months;
      let days;
      let years = date.getFullYear();
      if (date.getMonth() + 1 < 10) {
        months = `0${date.getMonth() + 1}`;
      } else {
        months = date.getMonth() + 1;
      }
      if (date.getDate() < 10) {
        days = `0${date.getDate()}`;
      } else {
        days = date.getDate();
      }


      return `${years}/${months}/${days}`;
    },
  },
  created() {
    this.getCouponList();
  },
};
</script>

<style scoped>
.is_enabled {
  color: green;
  font-weight: bold;
}

.not_enabled {
  color: red;
  font-weight: bold;
}
</style>