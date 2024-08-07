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
      fontFamily: {
        yan: 'Yannil, sans-serif',
        yancs: 'YannilCS  sans-serif',
      },
      backgroundImage: {
        'device-girl': "url('/assets/img/bg/device-girl.webp')",
      },
      fontSize: {
        yanfooter: 'min(218px, 30vw)',
      },
      spacing: {
        80: '80px',
        1024: '100px',
      },
      colors: {
        'green-light': '#00ff00',
        purple: '#ff00ff',
        orange: '#ffff00',
      },
      backgroundImage: {
        spinningGradient:
          'conic-gradient(from 0deg,#08f,#f60,#bbffa1,#4c00ff,#ab2666,#09f)',
      },
      animation: {
        heropulse: 'pulse 2s ease-in-out infinite',
        spincolor: 'spincolor 8s linear infinite',
      },
      dropShadow: {
        shineStar: [
          '0px 3.399999999999991px 9.09999999999999px rgb(255 255 255 / 0.33020000000000005)',
          '3.399999999999991px 0px 9.09999999999999px rgb(255 255 255 / 0.33020000000000005)',
          '0px -3.399999999999991px 9.09999999999999px rgb(255 255 255 / 0.33020000000000005)',
          '-3.399999999999991px 0px 9.09999999999999px rgb(255 255 255 / 0.33020000000000005)',
        ],
      },
      keyframes: {
        spincolor: {
          '0%': {
            transform: 'translate(-50%, -50%) rotate(0deg) scale(2)',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotate(1turn) scale(2)',
          },
        },

        pulse: {
          '0%': {
            opacity: 0.5,
            scale: '0.9',
          },
          '50%': {
            opacity: 1,
            scale: '1',
          },
          '100%': {
            opacity: 0.5,
            scale: '0.9',
          },
        },
      },
    },
  },
  plugins: [],
};
