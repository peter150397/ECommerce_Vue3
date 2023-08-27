<template>
  <div class="message-alert">
    <div class="alert alert-dismissible" :class="'alert-' + item.status" v-for="(item, index) in messages"
      :key="index">
      {{ item.message }}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Navbar",
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp,
      });

      this.removeMessageWithTiming(timestamp);
    },
    // 11-5 自動關閉警示資訊(設定五秒)
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 5000);
    },
  },
  created() {
    const vm = this;
    vm.$mittBus.on("message:push", (item) => {
      vm.updateMessage(item.message, item.status);
    })
  },
};
</script>
  
<style scope>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>