<template>
  <div>
    <header class="navbar navbar-dark bg-dark flex-md-nowrap py-3">
      <p class="navbar-brand col-md-3 col-lg-2 m-0 px-3">Peter's Ecommerce</p>

      <div class="navbar-nav">
        <div class="nav-item text-nowrap">
          <a class="nav-link px-3" href="#" @click.prevent="signOut">Sign out</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    // 3-3 登出
    signOut() {
      const api = `${import.meta.env.VITE_APIPATH}logout`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push("/login");
        }else{
          this.$mittBus.emit("message:push", { message: res.data.message, status: "danger" });
        }
      });
    },
  }
}
</script>