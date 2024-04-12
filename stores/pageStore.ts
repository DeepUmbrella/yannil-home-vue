import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const openStatus = ref(false);
  const updateOpenStatus = (open: boolean) => {
    openStatus.value = open;
  };
  return { openStatus, updateOpenStatus };
});
