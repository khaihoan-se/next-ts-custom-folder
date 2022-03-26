module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'min-mobile': '640px',
      // => @media (min-width: 640px) { ... }

      'min-tablet': '976px',
      // => @media (min-width: 976px) { ... }

      'min-desktop': '1348px',
      // => @media (min-width: 1348px) { ... }
      'max-mobile': {'max': '640px'},
      // => @media (max-width: 1535px) { ... }

      'max-tablet': {'max': '975px'},
      // => @media (max-width: 975px) { ... }

      'max-desktop': {'max': '1348px'},
      // => @media (max-width: 1348px) { ... }

      'max-mobile-s': {'max': '414px'}
    }
  },
  plugins: [],
}