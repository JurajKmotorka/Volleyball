/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: " #f4f4f5 ",
      },
      backgroundImage: {
        maingrad: "linear-gradient(to right, #110d26, #2c0a64)",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  important: false,

  daisyui: {
    themes: ["lofi"],
  },
};

module.exports = config;
