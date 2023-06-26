/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
    },
    // if changing breakpoints, change them into ./src/styles/_mixins.scss too
    screens: {
      sm: '320px',
      md: '640px',
      lg: '976px',
      dsk: '1351px',
      xl: '1601px',
    },
    container: {
      padding: {
        DEFAULT: '10px',
        sm: '10px',
        lg: '38px',
        dsk: '38px',
        xl: '50px',
      },
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        main: 'var(--bg-main)',
        secondary: 'var(--bg-secondary)',
        dark: 'var(--bg-dark)',
        'light-gray': 'var(--bg-light-gray)',
        blue: 'var(--color-hover-blue)',
        black: 'var(--bg-black)',
        'half-black': 'var(--color-half-black)',
      },
      colors: {
        'dark-gray': 'var(--color-dark-gray)',
        'hover-blue': 'var(--color-hover-blue)',
        'semi-black': 'var(--color-semi-black)',
        'light-gray': 'var(--color-light-gray)',
        'dark-hover': 'var(--color-hover-black)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'half-gray': 'var(--color-half-gray)',
        'half-white': 'var(--color-half-white)',
        'light-gray': 'var(--bg-light-gray)',
      },
      width: {
        212: '212px',
        365: '365px',
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      minHeight: {
        590: '590px',
      },
      padding: {
        40: '40px',
        100: '100px',
      },
      margin: {
        40: '40px',
        100: '100px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
