<script setup lang="ts">
import { useMenuStore } from '~/stores';
const menuStore = useMenuStore();
const { openStatus } = storeToRefs(menuStore);
</script>

<template>
  <div class="text-white text-opacity-80 h-full">
    <YlHeader />
    <slot />
    <YlFooter />
  </div>
</template>
