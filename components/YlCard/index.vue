<script setup lang="ts">
export interface YlCardType {
  title: string;
  content?: string;
  target?: string;
  imgUrl?: string;
  videoUrl?: string;
  cardType?: 'image' | 'video';
  customerLayout?: string;
}

const props = withDefaults(defineProps<YlCardType>(), {
  title: '标题',
  content: '',
  imgUrl: 'https://picsum.photos/200/300?random=1',
  videoUrl:
    'https://cdn.pixabay.com/video/2023/10/07/183960-872226574_large.mp4',
  cardSize: 'medium',
  cardType: 'image',
  target: '',
  customerLayout: '',
});
</script>

<template>
  <div class="relative size-fit">
    <div class="overflow-hidden rounded-xl" :class="customerLayout">
      <picture class="size-full object-cover" v-if="cardType === 'image'">
        <img :src="imgUrl" :alt="title" />
      </picture>
      <video
        class="size-full"
        v-if="cardType === 'video'"
        :poster="imgUrl"
        loop
        autoplay
        playsinline
        muted
      >
        <source :src="videoUrl" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div
      class="absolute bottom-0 left-0 black/30 py-[1px] px-[8px] m-[10px] text-sm text-white/60 rounded backdrop-blur-md"
    >
      <a
        v-if="target"
        :href="target"
        target="_blank"
        rel="noreferrer"
        class="hover:underline"
        >{{ title }}</a
      >
      <span v-else>{{ title }}</span>
    </div>
  </div>
</template>
