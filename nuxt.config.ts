// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      //put env variables here
    },
  },
  plugins: ['@/plugins/initGlobal.ts'],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
      },
    },
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  alias: {
    '@hooks/*': './hooks/*',
  },
});
