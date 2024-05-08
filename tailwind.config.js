/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "covered-by-your-grace": ["Covered By Your Grace", "cursive"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
