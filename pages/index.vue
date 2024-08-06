<script setup lang="ts">
definePageMeta({
  title: 'yannil - 亚尼尔',
  description: '',
});

import { useGlobalStore } from '~/stores';

import type { YlCardType } from '~/components/YlCard/index.vue';

import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { scrollPosition } = storeToRefs(globalStore);

const cardData1: Array<YlCardType> = [
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/400/200?random=1',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=1',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=2',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/350/150?random=3',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/450/250?random=1',
  },
];

const cardData2: Array<YlCardType> = [
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/400/150?random=121',
  },

  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/350/300?random=122',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=123',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=124',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/450/250?random=125',
  },
];
const cardData3: Array<YlCardType> = [
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/400/200?random=112',
  },

  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/350/150?random=113',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=114',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/550/300?random=115',
  },
  {
    title: 'Lorem Picsum',
    imgUrl: 'https://picsum.photos/450/250?random=116',
  },
];
</script>

<template>
  <main>
    <section class="relative min-h-screen">
      <div
        class="absolute inset-0 flex justify-center items-center select-none overflow-hidden"
      >
        <div class="max-sm:hidden">
          <div class="flex items-center justify-center max-sm:scale-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1080"
              height="1080"
              fill="none"
              viewBox="0 0 1080 1080"
              class="absolute animate-heropulse drop-shadow-shineStar"
            >
              <path
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="3"
                d="M539.294 253.338V537l248.919 146.703-248.557 143.506-248.489-143.546-.069-286.968 248.196-143.357zM292 683l247-145.5"
                pathLength="1"
                stroke-dashoffset="0"
                stroke-dasharray="1px 1px"
              ></path>
              <path
                stroke="#fff"
                stroke-linejoin="round"
                stroke-width="3"
                d="M539.5 828V537L291 396.5"
                pathLength="1"
                stroke-dashoffset="0px"
                stroke-dasharray="1px 1px"
              ></path>
            </svg>
            <div class="relative"></div>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-0 overflow-hidden flex justify-end flex-col p-[50px] items-center user-select-none point-events-none"
      >
        <div class="flex flex-col gap-[40px] items-center text-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            class="animate-heropulse text-[40px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
    <section
      class="relative min-h-screen flex flex-col items-center"
      style="contain: layout"
    >
      <div
        class="relative px-8 w-full flex justify-center items-center flex-col text-white mx-[125px] my-auto max-w-[739px]"
      >
        <div
          :style="{ opacity: 0.3 + scrollPosition * 0.7 }"
          class="absolute mt-0 z-0 h-[180%] min-w-[100%] point-events-none blur-[100px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <div
            :style="{
              '--tw-scale-x': 1.5 - (scrollPosition >= 1 ? 1 : scrollPosition),
              '--tw-scale-y': 1.5 - (scrollPosition >= 1 ? 1 : scrollPosition),
            }"
            class="transition-all duration-500 delay-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute min-w-[1000px] rounded-full w-screen h-screen overflow-hidden"
          >
            <div
              class="absolute top-1/2 w-screen h-[100vw] -translate-x-1/2 -translate-y-1/2 left-1/2 animate-spincolor bg-spinningGradient"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section class="relative min-h-screen p-4">
      <YlCardGroup :card-data="cardData1" :title-index="1">
        <div
          style="
            font-weight: 400;
            line-height: 99%;
            color: #fff;
            font-size: max(min(48px, 10vw), 18px);
            letter-spacing: -2.4px;
            margin-bottom: 42px;
          "
        >
          Hello,I'm Yannil
        </div>
      </YlCardGroup>
    </section>
    <section class="relative min-h-screen p-4">
      <YlCardGroup :card-data="cardData2" :title-index="10">
        <div
          style="
            font-weight: 400;
            line-height: 99%;
            color: #fff;
            font-size: max(min(48px, 10vw), 18px);
            letter-spacing: -2.4px;
            margin-bottom: 42px;
          "
        >
          Hello,I'm Yannil
        </div>
      </YlCardGroup>
    </section>
    <section class="relative min-h-screen p-4">
      <YlCardGroup :card-data="cardData3" :title-index="4">
        <div
          style="
            font-weight: 400;
            line-height: 99%;
            color: #fff;
            font-size: max(min(48px, 10vw), 18px);
            letter-spacing: -2.4px;
            margin-bottom: 42px;
          "
        >
          Hello,I'm Yannil
        </div>
      </YlCardGroup>
    </section>
  </main>
</template>
