/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa', // blue-400
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a', // slate-900
        },
        text: {
          light: '#1f2937', // gray-800
          dark: '#f8fafc', // slate-50
        },
        accent: {
          light: '#6366f1', // indigo-500
          dark: '#818cf8', // indigo-400
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
  },

  darkMode: 'class',

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
};
