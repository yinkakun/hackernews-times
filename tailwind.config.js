const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Fondamento', ...defaultTheme.fontFamily.serif],
        body: ['Lora', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'yellowish-orange': '#F9F7F1',
        'raisin-black': '#262626',
      },
      backgroundImage: {
        'paper-texture': "url('src/images/paper-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
