/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: '#F7F4EE', dark: '#171B18' },
        surface: { DEFAULT: '#FFFDF8', dark: '#202621' },
        ink: { DEFAULT: '#1F2521', dark: '#F3EFE6' },
        muted: { DEFAULT: '#5E665F', dark: '#B9C0B6' },
        line: { DEFAULT: '#D8D4CA', dark: '#39423A' },
        accent: {
          DEFAULT: '#A54B2A',
          hover: '#823A20',
          soft: '#F1E0D7',
          dark: '#E19A78',
          darkHover: '#F0B18F',
          darkSoft: '#4A3026',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['IBM Plex Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};
