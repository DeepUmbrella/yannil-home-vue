import { computed } from 'vue';
import { useUserStore } from '~/stores/user';

export const useAuth = () => {
  const userStore = useUserStore();
  const isAuthenticated = computed(() => !!userStore.loggedIn);

  return {
    isAuthenticated,
  } as const;
};
