/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#013CC6",
        secondary: "#0B63F8",
        link: "#0B63F8",
        "orange-main": "#FFBC0F",
      },
    },
  },
  plugins: [],
};
