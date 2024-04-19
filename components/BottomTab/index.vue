<template>
  <div class="flex w-full justify-center">
    <div
      class="flex w-fit backdrop-blur-md shadow-white overflow-hidden rounded-[12px] min-h-[68px]"
    >
      <div v-for="item in tab">
        <MenuItem :menu-item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tab: {
    default: [
      {
        title: 'Menu Navigator',
        content: '内容1',
      },
      {
        title: 'About US',
        content: '内容1',
      },
      {
        title: 'Join US',
        content: '内容1',
      },
    ],
  },
  width: {
    type: String,
    default: '1024',
  },
});
</script>
