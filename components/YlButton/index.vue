<script setup lang="ts">
const vXy = {
  mounted: (el: HTMLElement) => {
    el.addEventListener('mousemove', (e) => {
      el.style.setProperty('--x', e.pageX - el.offsetLeft + 'px');
      el.style.setProperty('--y', e.pageY - el.offsetTop + 'px');
    });
  },
};

interface ButtonProps {
  variant?: 'primary' | 'warning' | 'danger';
  size?: 'large' | 'small' | 'normal';
  blink?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'large',
  blink: false,
});

const buttonSpaces = {
  large: 'py-4 px-12',
  small: 'py-2 px-4',
  normal: 'py-3 px-8',
};

const variantColorMap = {
  primary: '#00ff00',
  warning: '#ffff00',
  danger: '#ff00ff',
};
</script>

<template>
  <a
    href="#"
    :style="{ '--clr': variantColorMap[props.variant] }"
    class="button flex w-fit tracking-widest justify-center rounded-full relative bg-[#2d2d2d] text-slate-400"
    :class="[
      buttonSpaces[props.size],
      props.variant,
      {
        blink: props.blink,
      },
    ]"
    v-xy
  >
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<style scoped lang="scss">
.button {
  overflow: hidden;
  transition:
    0.5s,
    top 0s,
    left 0s;
  span {
    position: relative;
    z-index: 1;
  }
  &.blink {
    animation: blink 2s linear infinite;
    &:hover {
      &::before {
        animation: none;
      }
    }
    &::before {
      animation: shadow-left-right 2s linear infinite;
    }
  }

  &:hover {
    color: var(--clr);
    text-shadow:
      0 0 15px var(--clr),
      0 0 45px var(--clr);
  }
  &::before {
    position: absolute;
    content: '';
    left: var(--x);
    top: var(--y);
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(var(--clr), transparent, transparent);
    opacity: 0;
    transform: 0.5;
  }
  &::after {
    position: absolute;
    content: '';
    inset: 2px;
    background-color: rgb(45, 45, 45, 0.8);
    @apply rounded-full;
  }
  &:hover::before {
    opacity: 1;
  }

  @keyframes blink {
    50% {
      color: var(--clr);
      text-shadow:
        0 0 15px var(--clr),
        0 0 45px var(--clr);
    }
  }

  @keyframes shadow-left-right {
    0% {
      left: 0;
      top: 0%;
      opacity: 1;
    }
    50% {
      top: 50%;
      opacity: 0.5;
      left: 50%;
    }
    100% {
      top: 100%;
      opacity: 0;
      left: 100%;
    }
  }
}
</style>
