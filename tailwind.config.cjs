/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: " #f4f4f5 ",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = config;
