/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Raleway', 'sans-serif'],
    },
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
        'main-bg': 'var(--bg-main)',
        'secondary-bg': 'var(--bg-secondary)',
        'dark-bg': 'var(--bg-dark)',
        'light-gray-bg': 'var(--bg-light-gray)',
      },
      colors: {
        'dark-gray': 'var(--color-dark-gray)',
        'hover-blue': 'var(--color-hover-blue)',
        'semi-black': 'var(--color-semi-black)',
        'light-gray': 'var(--color-light-gray)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'half-gray': 'rgba(135, 135, 135, 0.3);',
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
      height: {
        80: '80px',
        100: '100px',
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
  plugins: [],
}