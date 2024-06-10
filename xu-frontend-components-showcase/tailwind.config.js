/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'primary-shad': '#feffd180',
      'primary-light': '#FFEEA9',
      primary: '#FFBF78',
      'primary-dark': '#FF7D29',
      'primary-darkest': '#C0541A',
      'secondary-shad': '#dcf2f180',
      'secondary-light': '#dcf2f1',
      secondary: '#7fc7d9',
      'secondary-dark': '#365486',
      'secondary-darkest': '#0f1035',
      'surface-light': '#f7f7f7',
      surface: '#e8e8e8',
      'surface-dark': '#bbbfca'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
