/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'semi-sm': '410px',
      },
      gridTemplateColumns: {
        'weather-150': 'repeat( auto-fill, minmax(150px, 150px) )',
        'weather-125': 'repeat( auto-fill, minmax(125px, 125px) )',
        'weather-100': 'repeat( auto-fill, minmax(100px, 100px) )',
        'weather-95': 'repeat( auto-fill, minmax(95px, 95px) )',
        'weather-90': 'repeat( auto-fill, minmax(90px, 90px) )',
        'weather-85': 'repeat( auto-fill, minmax(85px, 85px) )',
        'weather-80': 'repeat( auto-fill, minmax(80px, 80px) )',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
