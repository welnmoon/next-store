/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // если ты используешь app router
    "./pages/**/*.{js,ts,jsx,tsx}", // если pages router
    "./components/**/*.{js,ts,jsx,tsx}", // обязательно для компонентов
    "./src/**/*.{js,ts,jsx,tsx}", // если у тебя структура типа src/pages, src/components и т.д.
  ],
  safelist: ["btn"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
