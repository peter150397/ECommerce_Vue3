<script>
import { RouterView } from 'vue-router';
import Loading from 'vue-loading-overlay';
import AlertMessage from "./components/AlertMessage.vue";

export default {
  components: {
    Loading,
    AlertMessage,
  }
}
</script>

<template>
  <Loading :active="$switchLoadingStatus.$state.isLoading"/>
  <AlertMessage />
  <RouterView />
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
