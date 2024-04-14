/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Protest: ["Protest Guerrilla", "sans - serif"],
        kaisei: ["Kaisei Opti", "serif"],
      },
    },
  },
  plugins: [],
};
