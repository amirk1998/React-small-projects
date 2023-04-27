/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      boxShadow: {
        custom: '0 5px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
