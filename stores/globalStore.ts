import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    scrollPosition: 0,
  }),
  actions: {
    updateScrollPosition(position: number) {
      this.scrollPosition = position;
    },
  },
});
