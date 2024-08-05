<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '~/stores';

const globalStore = useGlobalStore();
const { scrollPosition } = storeToRefs(globalStore);

const headerStyle = computed(() => {
  let color = `rgba(0, 0, 0, ${scrollPosition.value > 0.5 && scrollPosition.value < 1 ? 2 * scrollPosition.value - 1 : 0})`;
  if (scrollPosition.value >= 1) {
    color = `rgb(0 , 0, 0)`;
  }
  return {
    'background-image': `linear-gradient(0deg,rgba(0, 0, 0, 0),${color})`,
  };
});

const showShadow = computed(() => {
  return scrollPosition.value > 0.5;
});

const headerMask = computed(() => {
  const masks = [
    {
      mask: `linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 12.5%)`,
    },
    {
      mask: `linear-gradient(rgb(0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgba(0, 0, 0, 0) 25%)`,
    },
    {
      mask: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0) 37.5%)`,
    },
    {
      mask: `linear-gradient(rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)`,
    },
    {
      mask: `linear-gradient(rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)`,
    },
    {
      mask: `linear-gradient(rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)`,
    },
    {
      mask: `linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)`,
    },
    {
      mask: `linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0) 62.5%,
                    rgba(0, 0, 0, 1) 75%,
                    rgba(0, 0, 0, 1) 87.5%,
                    rgba(0, 0, 0, 0) 100%
                  )`,
    },
  ];
  return masks.map((item, index) => {
    let blurPx = 2 * scrollPosition.value - 1;
    blurPx =
      scrollPosition.value < 0.5 ? 0 : scrollPosition.value > 1 ? 1 : blurPx;
    blurPx *= Math.pow(2, 6 - index);

    return {
      ...item,
      backdropFilter: `blur(${blurPx}px)`,
      webkitBackdropFilter: `blur(${blurPx}px)`,
      zIndex: index + 1,
    };
  });
});
</script>
<template>
  <div
    class="header pointer-events-none fixed top-0 left-0 right-0 z-[1000]"
    :style="headerStyle"
  >
    <div class="flex justify-between p-[32px]">
      <div
        v-show="showShadow"
        class="linear-blur absolute top-0 left-0 -z-1 pointer-events-none w-full h-[160%] origin-top"
        :style="headerStyle"
      >
        <div>
          <div
            v-for="item in headerMask"
            :key="item.mask"
            class="absolute inset-0 z-[1]"
            :style="item"
          ></div>
        </div>
      </div>
      <div
        class="pointer-events-none relative z-[100] flex gap-8 font-medium items-center justify-between w-full"
      >
        <a
          class="pointer-events-auto text-white h-[29px] text-opacity-50 hover:text-opacity-100 font-medium"
          href="/"
        >
          <svg
            width="25"
            height="29"
            viewBox="0 0 25 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1784_519)">
              <path
                d="M12.3891 28.61L0 21.4568L12.3891 14.3037L24.7781 21.4568L12.3891 28.61Z"
                fill="white"
                fill-opacity="0.66"
              ></path>
              <path
                d="M0 7.15157L12.3891 0V28.611L0 21.4578V7.15157Z"
                fill="white"
                fill-opacity="0.65"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1784_519">
                <rect width="25" height="29" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
        <nav
          class="flex items-center w-full justify-end gap-8 text-white text-opacity-60"
        >
          <a
            class="rounded-full bg-white hover:bg-opacity-90 transition-colors text-black px-4 py-2"
            style="pointer-events: auto; opacity: 1"
            href="/dream-machine/creations"
            >Try Now</a
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<style></style>
