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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
