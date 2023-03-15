/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'alice-blue': '#ecf0f3',
        'summer-sky': '#2cbce9',
        midnight: '#1f2937',
        'neon-blue': '#5651e5',
        'cornflower-blue': '#709dff',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-button':
          'linear-gradient(90deg, rgba(86,81,229,1) 0%, rgba(112,157,255,1) 100%);',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
        shadow: ['Shadows Into Light', 'cursive'],
      },
    },
  },
  plugins: [],
};
