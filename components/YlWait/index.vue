<script setup lang="ts">
import { calculateFromToTarget } from '~/utils';
import { ref } from 'vue';
const showWait = ref(true);
const isWaiting = ref(true);
const s = ref(0);
const dashOffset = ref('0');
const scaledash = ref(1);

const scaleScreen = () => {
  calculateFromToTarget(
    200,
    {
      progressing(value) {
        scaledash.value = value;
      },
      afterEnd(target) {
        showWait.value = false;
      },
    },
    1,
    0,
  );
};

onMounted(() => {
  watchEffect(() => {
    if (!isWaiting.value) {
      calculateFromToTarget(
        1000,
        {
          progressing(value) {
            dashOffset.value = value?.toFixed(3) || '0';
          },
          afterEnd: scaleScreen,
        },
        0,
        0.858,
      );
    }
  });

  const waitintFn = () => {
    const timer = requestAnimationFrame(() => {
      s.value++;
      if (s.value > 60 * 2) {
        isWaiting.value = false;
        cancelAnimationFrame(timer);
      } else {
        waitintFn();
      }
    });
  };
  waitintFn();
});
</script>

<template>
  <div>
    <div
      class="absolute opacity-0"
      :class="{
        'slide-out-center': !showWait,
      }"
    >
      <div
        class="border-solid rounded-full size-[px] border-[5px] border-[rgb(from white r g b / 0.3899999999999961)]"
      ></div>
    </div>
    <div
      class="absolute opacity-0"
      :class="{
        'slide-out-center': !showWait,
      }"
    >
      <div
        class="border-solid rounded-full size-[520px] border-[5px] border-[rgb(from white r g b / 0.3899999999999961)]"
      ></div>
    </div>
    <div
      class="absolute z-1 opacity-0 bg-white rounded-full size-[30px]"
      :class="{
        'slide-out-center': !showWait,
      }"
    ></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1080"
      height="1080"
      fill="none"
      viewBox="0 0 1080 1080"
      class="absolute animate-heropulse drop-shadow-shineStar"
      :style="{
        transform: `scale(${scaledash})`,
        opacity: `${showWait ? 1 : 0}`,
      }"
    >
      <path
        stroke="#fff"
        stroke-linejoin="round"
        stroke-width="3"
        d="M539.294 253.338V537l248.919 146.703-248.557 143.506-248.489-143.546-.069-286.968 248.196-143.357zM292 683l247-145.5"
        pathLength="1"
        :stroke-dashoffset="dashOffset"
        stroke-dasharray="1px 1px"
      ></path>
      <path
        stroke="#fff"
        stroke-linejoin="round"
        stroke-width="3"
        d="M539.5 828V537L291 396.5"
        pathLength="1"
        stroke-dashoffset="0"
        stroke-dasharray="1px 1px"
      ></path>
    </svg>
    <slot :isWaiting="showWait"></slot>
  </div>
</template>
