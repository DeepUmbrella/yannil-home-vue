<script setup lang="ts">
import type { YlCardType } from '../YlCard/index.vue';
import YlCard from '../YlCard/index.vue';
import { useChunk } from '#imports';

interface YlCardGroup {
  cardData: Array<YlCardType>;
  title?: string;
  titleIndex?: number;
}

const props = withDefaults(defineProps<YlCardGroup>(), {
  cardData: () => [] as YlCardType[],
  title: 'Title',
  titleIndex: 1,
});

const chunk = computed(() => {
  const data = [...props.cardData];
  if (props.titleIndex <= 1) {
    data.unshift({
      title: 'slot',
    });
  } else if (props.titleIndex >= data.length) {
    data.push({
      title: 'slot',
    });
  } else {
    data.splice(props.titleIndex, 0, {
      title: 'slot',
    });
  }

  return useChunk(data, 2);
});
</script>

<template>
  <div
    class="w-full flex flex-col items-center justify-center relative min-h-screen"
  >
    <div
      class="absolute uppercase font-bold text-white/10 text-[120px] -rotate-90 left-[80px] -translate-x-1/2"
      v-if="title"
    >
      <h1>{{ title }}</h1>
    </div>
    <div class="card-group flex items-center justify-center flex-col gap-3">
      <div
        class="flex items-center gap-3 card"
        v-for="(item, index) in chunk"
        :key="index"
      >
        <template v-for="(i, idx) in item" :key="idx">
          <slot v-if="i.title === 'slot'"></slot>
          <YlCard v-else v-bind="i" />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card:last-child {
  align-items: flex-start;
}
.card:first-child {
  align-items: flex-end;
}
</style>
