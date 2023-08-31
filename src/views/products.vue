<template>
  <div>
    <!-- PRODUCTS 商品表格 -->

    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModal(true)">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4 table-hover align-middle">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品</th>
          <th>原價</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ currencyFilter(item.origin_price) }}</td>
          <td class="text-right">{{ currencyFilter(item.price) }}</td>
          <td>
            <span v-if="item.is_enabled == 1">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- PAGINATION 分頁 -->

    <Pagination :pagination="pagination" @getData="getProduct"></Pagination>

    <!-- MODAL 新增、更新產品彈跳視窗 -->

    <div class="modal fade" id="productsModal" tabindex="-1" aria-labelledby="productsModal" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">
              <span>新增產品</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4 d-flex flex-column gap-3">
                <div>
                  <label for="image" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image" placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl" />
                </div>
                <div>
                  <label for="customFile" class="form-label">或 上傳圖片
                  </label>
                  <input type="file" id="customFile" class="form-control" ref="files" @change="uploadFile" />
                </div>
                <img
                  img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                  class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div class="col-sm-8 d-flex flex-column gap-3">
                <div>
                  <label for="title" class="form-label">標題</label>
                  <input type="text" class="form-control" id="title" placeholder="請輸入標題" v-model="tempProduct.title" />
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input type="text" class="form-control" id="category" placeholder="請輸入分類"
                      v-model="tempProduct.category" />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input type="unit" class="form-control" id="unit" placeholder="請輸入單位" v-model="tempProduct.unit" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input type="number" class="form-control" id="origin_price" placeholder="請輸入原價"
                      v-model="tempProduct.origin_price" />
                  </div>
                  <div class="col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input type="number" class="form-control" id="price" placeholder="請輸入售價"
                      v-model="tempProduct.price" />
                  </div>
                </div>
                <hr />

                <div>
                  <label for="description" class="form-label">產品描述</label>
                  <textarea type="text" class="form-control" id="description" placeholder="請輸入產品描述"
                    v-model="tempProduct.description"></textarea>
                </div>
                <div>
                  <label for="content" class="form-label">說明內容</label>
                  <textarea type="text" class="form-control" id="content" placeholder="請輸入產品說明內容"
                    v-model="tempProduct.content"></textarea>
                </div>
                <div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempProduct.is_enabled"
                      :true-value="1" :false-value="0" />
                    <label class="form-check-label form-label" for="is_enabled">
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
            <button type="button" class="btn btn-primary" @click="addProduct">
              確認
            </button>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#delProductModal">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="delProductModal" tabindex="-1" aria-hidden="true" aria-labelledby="delProductModal">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as bootstrap from "bootstrap";

import Pagination from "../components/Pagination.vue";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getProduct(page = 1) {
      const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/products?page=${page}`;
      const vm = this;
      console.log(vm);

      this.$switchLoadingStatus.switchLoadingStatus(true);
      axios.get(api).then((response) => {
        this.$switchLoadingStatus.switchLoadingStatus(false);
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = Object.assign({}, item);
        this.isNew = true;
      } else {
        this.tempProduct = Object.assign({}, item);
        this.isNew = false;
      }

      new bootstrap.Modal('#productsModal').show();
    },

    addProduct() {
      let api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/product`;
      let httpMethod = "post";
      const vm = this;

      if (!vm.isNew) {
        api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        httpMethod = "put";
      }

      axios[httpMethod](api, { data: vm.tempProduct }).then((response) => {
        bootstrap.Modal.getOrCreateInstance('#productsModal').hide();

        vm.getProduct();
      });
    },
    deleteProduct() {
      const vm = this;

      if (!vm.isNew) {
        const api = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
        axios.delete(api).then((response) => {
          vm.getProduct();
        });
      }

      bootstrap.Modal.getOrCreateInstance('#delProductModal').hide();
      bootstrap.Modal.getOrCreateInstance('#productsModal').hide();
    },
    uploadFile() {
      const vm = this;
      const uploadedFile = this.$refs.files.files[0];

      const formData = new FormData();
      formData.append("file-to-upload", uploadedFile);

      const url = `${import.meta.env.VITE_APIPATH}api/${import.meta.env.VITE_CUSTOMPATH}/admin/upload`;
      axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        if (res.data.success) {
          Object.assign(vm.tempProduct, { imageUrl: res.data.imageUrl });
        }else{
          this.$mittBus.emit("message:push" , {message: res.data.message , status: "danger"});
        }
      });
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
  },
};
</script>