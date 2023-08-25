/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#A3A3A3',
      'bg': '#F3F3F3',
      'darkbg': '#4D4D4D',
      'primary': '#A1D8F9',
      'secondary': '#F96E46',
      'tertiary': '#F9C846',
      'quaternary': '#AFF8C6',
      'text': '#000000',
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '3/5': '3 / 5',
      },
    },
  },
  plugins: [],
}

