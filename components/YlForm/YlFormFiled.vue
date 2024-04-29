<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Yl Input',
  },
  type: {
    type: String,
    default: 'text',
  },
  submittedBtn: {
    type: Boolean,
    default: false,
  },
});
const error = ref('');
const value = ref();
</script>
<template>
  <div class="flex flex-col gap-1">
    <label v-if="!submittedBtn" class="text-white">{{ label }}</label>
    <slot></slot>
    <span v-if="error && !submittedBtn" class="text-red">{{ error }}</span>
  </div>
</template>
