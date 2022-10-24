/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        zuriBg: "#F4F5F7",
        zuriGray: { 200: "#EAECF0", 900: "#101828" },
      },
      fontFamily: {
        default: ["Montserrat"],
      },
      height: { box: "76px", boxSm: "76px" },
      borderWidth: {1: "1px"}
    },
  },
  plugins: [],
};
