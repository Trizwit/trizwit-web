/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your desired font families
        custom: ['Roboto', 'sans-serif'],
        new: ['Cabin Sketch', 'cursive'],
        old: ['Lexend Peta'],
        // Add more font families if needed
      },
    },
  },
  plugins: [],
};
