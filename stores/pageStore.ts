import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMenuStore = defineStore('menu', () => {
  const openStatus = ref(false);
  const updateOpenStatus = (open: boolean) => {
    openStatus.value = open;
  };
  const triggerMenuOpenStatus = () => {
    console.log('ddddd');
    openStatus.value = !openStatus.value;
  };
  return { openStatus, updateOpenStatus, triggerMenuOpenStatus };
});
