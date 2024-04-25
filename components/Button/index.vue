<script setup lang="ts">
import {} from 'vue';
interface ButtonProps {
  textColor: string;
  size: 'large' | 'small' | 'normal';
}
const props = withDefaults(defineProps<ButtonProps>(), {
  textColor: '#000000',
  size: 'large',
});

const buttonSpaces: Record<ButtonProps['size'], string> = {
  large: 'py-5 px-[60px]',
  small: 'py-3 px-8',
  normal: 'py-4 px-12',
};
</script>

<template>
  <a
    href="#"
    class="flex justify-center rounded-[60px] relative bg-[#2d2d2d] text-slate-400"
    :class="[buttonSpaces[props.size]]"
  >
    <span>
      <slot></slot>
    </span>
  </a>
</template>
