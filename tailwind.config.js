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
        'weather-140': 'repeat( auto-fill, minmax(140px, 140px) )',
        'weather-135': 'repeat( auto-fill, minmax(135px, 135px) )',
        'weather-125': 'repeat( auto-fill, minmax(125px, 125px) )',
        'weather-120': 'repeat( auto-fill, minmax(120px, 120px) )',
        'weather-100': 'repeat( auto-fill, minmax(100px, 100px) )',
        'weather-95': 'repeat( auto-fill, minmax(95px, 95px) )',
        'weather-90': 'repeat( auto-fill, minmax(90px, 90px) )',
        'weather-85': 'repeat( auto-fill, minmax(85px, 85px) )',
        'weather-80': 'repeat( auto-fill, minmax(80px, 80px) )',
      },
      backgroundImage: ({ theme }) => ({
        uvi: `linear-gradient( to right, ${theme('colors.green.500')} 0 18%, ${theme('colors.yellow.500')} 27% 45%, ${theme('colors.orange.500')} 54% 64%, ${theme('colors.red.500')} 73% 91%, ${theme('colors.violet.500')})`,
      }),
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
