<script setup lang="ts">
import { useMenuStore } from '~/stores';
const menuStore = useMenuStore();
const { openStatus } = storeToRefs(menuStore);
</script>

<template>
  <div
    class="__variable_4b71e2 __variable_501260 font-dmSans text-white text-opacity-80 h-full"
  >
    <YlHeader></YlHeader>
    <div
      class="w-full h-full flex flex-col"
      :class="{
        'backdrop-blur-md': openStatus,
      }"
    >
      <slot />
    </div>
  </div>
</template>
