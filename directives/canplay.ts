import type { Directive } from 'vue';
export const vCanplay: Directive<HTMLVideoElement, (canplay: boolean) => void> =
  {
    mounted(el, binding) {
      el.addEventListener('canplay', () => {
        console.log('canplay');
        binding.value(true);
      });
    },
  };
