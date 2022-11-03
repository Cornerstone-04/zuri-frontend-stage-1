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
        zuriGray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        primary: {
          25: "#F5FAFF",
          50: "#EFF8FF",
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "##175CD3",
          800: "#1849A9",
          900: "#194185",
        },
        clear: "#344054BF",
      },
      fontFamily: {
        default: ["Montserrat"],
        contact: ["Inter"],
      },
      height: {
        box: "76px",
        boxSm: "76px",
        img: "88px",
        input: "44px",
        text: "132px",
      },
      width: { box: "76px", boxSm: "76px", img: "88px", tip: "185px" },
      borderWidth: { 1: "1px" },
      maxWidth: { custom: "1216px", form: "720px" },
      margin:{
        btn: "300px"
      }
    },
  },
  plugins: [],
};
