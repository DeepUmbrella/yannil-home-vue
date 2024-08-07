<script setup lang="ts">
import type { YlCardType } from '../YlCard/index.vue';
import YlCard from '../YlCard/index.vue';

interface YlCardGroup {
  cardData: Array<YlCardType>;
  title?: string;
}

const props = withDefaults(defineProps<YlCardGroup>(), {
  cardData: () => [] as YlCardType[],
  title: '',
});
</script>

<template>
  <div class="w-full max-w-7xl px-8">
    <h1
      class="font-semibold text-white text-[48px] leading-[118%] tracking-[-2.4px] mb-8"
      v-html="props.title"
    ></h1>
    <div
      class="text-white text-[20px] tracking-[-5%] leading-[118%] font-semibold grid grid-cols-4 max-md:grid-cols-2 gap-3 gap-y-8"
    >
      <div
        v-for="(item, index) in props.cardData"
        :key="index"
        class="flex-1 flex flex-col gap-4"
      >
        <YlCard
          class="size-full"
          :imgUrl="item.imgUrl"
          hide-title
          customer-layout="h-[200px] "
        />
        <div class="text-center">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
