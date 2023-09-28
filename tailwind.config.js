/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '*.{html,js}',
    '**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'chevron-down': 'url("./public/chevron-down.svg")',
        // can be used to create variation of mobile and desktop images
        'v1': 'var(--bg-v1)',
        'v2': 'var(--bg-v2)'
      },
      fontFamily: {
        main: ['Heebo']
      },
      maxWidth: {
        '8xl': '70rem'
      },
      colors: {
        blue: {
          primary: '#01558E',
          secondary: '#00539D',
          accent: '#032B50'
        },
        red: {
          primary: '#ED1C24',
        },
        sky: {
          primary: '#DDE8F0',
          secondary: '#6CAEDC',
          accent: '#C2E6FF'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

