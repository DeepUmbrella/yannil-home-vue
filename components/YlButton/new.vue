<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: 'Try now',
  },
  href: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <a
    class="flex gap-8 max-w-[497px] w-full items-center justify-between border-white border border-opacity-20 bg-white bg-opacity-20 transition-all hover:bg-opacity-30 text-balance text-center text-white font-medium tracking-[-0.886px] text-[30px] rounded-full px-10 h-[98px]"
    :href="href"
  >
    <span class="pb-[1px]">{{ text }}</span>
    <svg
      width="48"
      height="41"
      viewBox="0 0 48 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.3778 40.9997L24.696 38.3406L40.5142 22.5452H0.96875V18.727H40.5142L24.696 2.93155L27.3778 0.272461L47.7415 20.6361L27.3778 40.9997Z"
        fill="white"
      ></path>
    </svg>
  </a>
</template>
