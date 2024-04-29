<script setup lang="ts">
const props = defineProps({});
const emit = defineEmits(['submit', 'trigger']);
const formVn = ref<HTMLFormElement | null>();
onMounted(() => {
  console.log(formVn);
});
</script>

<template>
  <form
    ref="formVn"
    @submit.prevent="emit('submit')"
    class="flex flex-col gap-2 items-center"
  >
    <slot></slot>
    <slot name="submit" @submit="() => emit('submit')"></slot>
  </form>
</template>
