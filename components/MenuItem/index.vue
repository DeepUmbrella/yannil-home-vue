<script setup lang="ts">
import { useMenuStore } from '~/stores';
interface MenuItemProps {
  menuItem: {
    title: string;
    content: string;
  };
}
const props = withDefaults(defineProps<MenuItemProps>(), {
  menuItem: () => ({ title: '', content: '' }),
});

const { triggerMenuOpenStatus } = useMenuStore();
</script>

<template>
  <div @click="triggerMenuOpenStatus">
    {{ menuItem.title }}
    {{ menuItem.content }}
  </div>
</template>
