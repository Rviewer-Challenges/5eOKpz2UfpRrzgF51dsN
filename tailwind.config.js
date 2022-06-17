/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#1D9BF0',
        'lightblue': '#8ECDF8',
        'black' : '#0f1419'
      },
    },
    plugins: [],
  }
}