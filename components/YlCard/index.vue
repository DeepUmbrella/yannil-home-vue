<script setup lang="ts">
import { vCanplay } from '~/directives/canplay';
import { ref } from 'vue';
export interface YlCardType {
  title: string;
  content?: string;
  target?: string;
  imgUrl?: string;
  videoUrl?: string;
  customerLayout?: string;
  hideTitle?: boolean;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<YlCardType>(), {
  title: '标题',
  content: '',
  imgUrl: 'https://picsum.photos/200/300?random=1',
  videoUrl: '',
  cardSize: 'medium',
  cardType: 'image',
  target: '',
  customerLayout: '',
  width: '',
  hideTitle: false,
  height: '',
});

const canplay = ref(false);
const updateCanplay = (newCanplayValue: boolean) => {
  canplay.value = newCanplayValue;
};
</script>

<template>
  <div class="relative size-fit">
    <div
      class="overflow-hidden rounded-xl"
      :class="customerLayout"
      :style="{
        width,
        height,
      }"
    >
      <picture>
        <img
          v-if="imgUrl"
          :style="{
            opacity: canplay ? 0 : 1,
          }"
          class="size-full object-cover"
          :src="imgUrl"
          :alt="title"
        />
      </picture>
      <video
        v-if="videoUrl"
        v-canplay="updateCanplay"
        class="size-full"
        :poster="imgUrl"
        :style="{
          opacity: canplay ? 1 : 0,
        }"
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
      v-if="!hideTitle"
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
