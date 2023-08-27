<script setup>
import { RouterView } from 'vue-router'
import { useCounterStore } from "./stores/counter";

const store = useCounterStore();

</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
