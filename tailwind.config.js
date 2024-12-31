/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{ts,css}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
