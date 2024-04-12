/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'device-girl': "url('/assets/img/bg/device-girl.webp')",
      },
      spacing: {
        80: '80px',
        1024: '100px',
      },
    },
  },
  plugins: [],
};
