<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Yl Input',
  },
});

const value = ref();
</script>
<template>
  <input
    class="text-white w-full p-2 rounded-lg bg-slate-800 text-white"
    :value="value"
  />
</template>
