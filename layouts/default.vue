<script setup lang="ts">
import { useMenuStore } from '~/stores';
const menuStore = useMenuStore();
const { openStatus } = storeToRefs(menuStore);
</script>

<template>
  <div class="w-full relative h-dvh bg-device-girl bg-cover bg-no-repeat">
    <div
      class="w-full h-full flex flex-col"
      :class="{
        'backdrop-blur-md': openStatus,
      }"
    >
      <slot />

      <div class="fixed bottom-2 w-full">
        <BottomTab></BottomTab>
      </div>
    </div>
  </div>
</template>
