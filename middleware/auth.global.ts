import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware((to, from) => {
  const { isAuthenticated } = useAuth();
  // isAuthenticated() is an example method verifying if a user is authenticated

  // if (isAuthenticated.value === false && to.path !== '/login') {
  //   return navigateTo('/login');
  // }
});
