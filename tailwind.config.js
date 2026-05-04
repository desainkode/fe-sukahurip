/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        desa: {
          blue: {
            50: '#eaf3ff',
            100: '#d0e7ff',
            200: '#a2d6f9',
            300: '#6abdf7',
            400: '#1e96fc',
            500: '#072ac8',
            600: '#0520a0',
            700: '#04187a',
            800: '#021054',
            900: '#010830',
            950: '#000418',
          },
          yellow: {
            50: '#FFF9E6',
            100: '#FFEDB3',
            200: '#FCC100',
            300: '#FFC400',
            400: '#FFC400',
            500: '#FFC400',
            600: '#E6B000',
            700: '#B38900',
            800: '#806200',
            900: '#4D3B00',
            950: '#261D00',
          },
        },
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('dark', '&:is(.dark *)')
    }
  ],
}
