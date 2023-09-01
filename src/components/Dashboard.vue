<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <RouterView />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  created() {
    // * 將前端寫入的cookie發送給後端以獲取後端資料
    // ** 將cookie帶出
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // ** 向後端發送
    this.$http.defaults.headers.common.Authorization = myCookie;
  },
};
</script>