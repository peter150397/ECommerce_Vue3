import { defineStore } from 'pinia'

export const switchLoadingStatus = defineStore({
  id: 'loadingStatus',
  state: () => ({
    isLoading: false,
  }),
  getters: {

  },
  actions: {
    switchLoadingStatus(bool) {
      this.isLoading = bool
    }
  }
})
