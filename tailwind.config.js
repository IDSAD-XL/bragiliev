/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    screens: {
      sm: '320px',
      md: '640px',
      lg: '976px',
      xl: '1600px',
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FFFFFF',
        'secondary-bg': '#F9F9F9',
        'dark-bg': '#040302',
        'light-gray': '#F3F3F3',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: '#E1E1E1',
      },
      width: {
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
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
