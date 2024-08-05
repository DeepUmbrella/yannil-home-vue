import { useGlobalStore } from '~/stores/globalStore';
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const globalStore = useGlobalStore(nuxtApp.$pinia);

    const resizeScrollHandler = () => {
      const scrollPosition = window.scrollY / window.innerHeight;

      globalStore.updateScrollPosition(scrollPosition);
    };

    window.addEventListener('resize', resizeScrollHandler);

    window.addEventListener('scroll', resizeScrollHandler);
  }
});
