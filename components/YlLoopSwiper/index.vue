<script lang="ts" setup>
defineProps({
  cardData: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="yl-loop-swiper relative flex items-center">
    <div
      class="yl-card-container rounded-[64px] overflow-hidden"
      v-for="(item, index) in cardData"
      :style="{
        'animation-delay': `-${(Math.floor(index / 2) * (9 / Math.floor(cardData.length / 2))).toFixed(2)}s`,
      }"
    >
      <YlCard v-bind="item" height="900px" width="1600px" hide-title />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes moveLeftRight {
  0% {
    transform: translateX(200px) translateZ(-3600px) rotateY(-5deg);
    opacity: 0;
    z-index: 1;
  }

  10% {
    transform: translateX(100px) translateZ(-3600px) rotateY(-5deg);
    opacity: 1;
  }

  20% {
    transform: translateX(50px) translateZ(-3600px) rotateY(-10deg);
    opacity: 1;
    z-index: 2;
  }

  40% {
    transform: translateX(200px) translateZ(-2700px) rotateY(-15deg);
    opacity: 1;
    z-index: 3;
  }
  60% {
    transform: translateX(400px) translateZ(-1800px) rotateY(-20deg);
    opacity: 1;
    z-index: 4;
  }
  80% {
    transform: translateX(800px) translateZ(-400px) rotateY(-35deg);
    filter: blur(0px);
    opacity: 1;
    z-index: 5;
  }
  100% {
    transform: translateX(1000px) translateZ(600px) rotateY(-60deg);
    filter: blur(12px);
    z-index: 6;
  }
}

@keyframes moveRightLeft {
  0% {
    transform: translateX(-200px) translateZ(-3600px) rotateY(5deg);
    opacity: 0;
    z-index: 1;
  }

  10% {
    transform: translateX(-100px) translateZ(-3600px) rotateY(5deg);
    opacity: 1;
  }

  20% {
    transform: translateX(-50px) translateZ(-3600px) rotateY(10deg);
    opacity: 1;
    z-index: 2;
  }

  40% {
    transform: translateX(-200px) translateZ(-2700px) rotateY(15deg);
    opacity: 1;
    z-index: 3;
  }
  60% {
    transform: translateX(-400px) translateZ(-1800px) rotateY(20deg);
    opacity: 1;
    z-index: 4;
  }
  80% {
    transform: translateX(-800px) translateZ(-400px) rotateY(35deg);
    filter: blur(0px);
    opacity: 1;
    z-index: 5;
  }
  100% {
    transform: translateX(-1000px) translateZ(600px) rotateY(60deg);
    filter: blur(12px);
    z-index: 6;
  }
}

.yl-loop-swiper {
  perspective: 1000px;
}
.yl-card-container {
  position: absolute;
  filter: blur(0px);

  &:nth-child(odd) {
    right: 0;
    transform: translateX(-200px) translateZ(-3600px) rotateX(0deg)
      rotateY(10deg);
    animation: moveRightLeft 9s infinite linear;
  }

  &:nth-child(even) {
    transform: translateX(200px) translateZ(-3600px) rotateX(0deg)
      rotateY(-10deg);
    animation: moveLeftRight 9s infinite linear;
  }
}
</style>
