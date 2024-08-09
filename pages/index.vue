<script setup lang="ts">
definePageMeta({
  title: 'yannil - 亚尼尔',
  description: '',
});

import { useGlobalStore } from '~/stores';
import { storeToRefs } from 'pinia';
import {
  cardData1,
  cardData2,
  cardData3,
  cardData4,
  cardDataOneRow,
  cardDataThreebox,
  swiperdata,
} from '~/mock/homedata';
const globalStore = useGlobalStore();
const { scrollPosition } = storeToRefs(globalStore);
</script>

<template>
  <main>
    <section class="relative min-h-screen">
      <div
        class="absolute inset-0 flex justify-center items-center select-none overflow-hidden"
      >
        <div class="max-sm:hidden">
          <YlWait class="flex items-center justify-center max-sm:scale-50">
            <template v-slot="{ isWaiting }">
              <div class="absolute top-10">
                <h1
                  class="h-[200px] text-white font-yancs leading-none flex justify-between font-bold"
                >
                  <em
                    class="text-[120px] self-start"
                    :class="[isWaiting ? 'opacity-0' : 'bounce-in-left']"
                    >YAN</em
                  >
                  <em
                    class="text-[60px] self-end"
                    :class="[isWaiting ? 'opacity-0' : 'bounce-in-right']"
                    >OF XiaoZhai</em
                  >
                </h1>
              </div>
              <YlLoopSwiper
                :class="[!isWaiting ? 'scale-in-center' : 'opacity-0']"
                :card-data="swiperdata"
              />
            </template>
          </YlWait>
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
        <div class="w-full max-w-4xl mt-[24px] relative">
          <h1
            class="text-[72px] max-sm:text-[52px] leading-[99%] tracking-[-3.6px] text-red relative lg:left-[-145px]"
          >
            Yan Family Bay <br />of
            <em class="font-yancs italic">Xiaozhai Bamiao Township</em>
          </h1>
          <div
            class="relative lg:left-[160px] xl:left-[204px] mt-[71px] lg:mt-[30px]"
          >
            <p
              class="text-[28px] font-medium leading-[130%] tracking-[0] mb-[21px]"
            >
              In the 1990s, during the famine, my parents moved their family to
              a bay to open up wasteland and survive, so it was named Yan Family
              Bay!
            </p>
            <p
              class="text-[20px] text-white/70 leading-[130%] tracking-[-0.2px]"
            >
              Named Yan Family Bay, stands as a testament to their perseverance
              and resilience. It symbolizes the Yan family's journey of survival
              and their contribution to turning a desolate area into a thriving
              community. The name Yan Family Bay not only honors the family's
              legacy but also serves as an inspiration to others about the power
              of human spirit and tenacity in the face of adversity.
            </p>
            <YlButtonNew class="mt-[40px]" text="Yan Family Bay" href="/" />
          </div>
        </div>
      </div>
    </section>
    <section class="relative min-h-screen px-[32px] py-[128px]">
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
    <section class="relative min-h-screen px-[32px] py-[128px]">
      <YlCardGroup :card-data="cardData4" :title-index="2">
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
    <section class="relative min-h-screen px-[32px] py-[128px]">
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
    <section class="relative min-h-screen px-[32px] py-[128px]">
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
          Hello,I'm Yannil 1
        </div>
      </YlCardGroup>
    </section>
    <section
      class="relative flex items-center justify-center min-h-screen py-[64px]"
    >
      <YlCardGroupOneRow
        title="Current<br>Limitations"
        :card-data="cardDataOneRow"
      />
    </section>
    <section
      class="relative flex items-center justify-center min-h-screen py-[64px]"
    >
      <YlCardGroupThreeBox
        title="Current<br>Limitations"
        :card-data="cardDataThreebox"
      />
    </section>
  </main>
</template>
