/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // Primary
      'nutmeg': '#854632',
      'dark-raspberry': '#7b284f',
      // Neutral
      'rose-white': '#fff5fa',
      'eggshell': '#f3e6d8',
      'light-gray': '#e4ded8',
      'wenge-brown': '#5f574e',
      'dark-charcoal': '#302d2c'
    },
    extend: {
      fontFamily: {
        fancy: ['"Young Serif"', 'sans-serif'],
        outfit: ['"Outfit"', 'serif']
      }
    },
  },
  plugins: [],
}

