/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'semi-sm': '450px',
      },
      gridTemplateColumns: {
        weather: 'repeat( auto-fill, minmax(150px, 150px) )',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
