/** @type {import('tailwindcss').Config} */

export default {
  prefix: 'tw-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#e4f2ff',
          100: '#bdddff',
          200: '#93c8ff',
          300: '#68b2ff',
          400: '#4ba1ff',
          500: '#3991ff',
          600: '#3B82F6',
          700: '#3a70e2',
          800: '#395ecf',
          900: '#353eaf',
        },
        gray: {
          900: '#111827',
        },
        orange: {
          50: '#fffee9',
          100: '#fefac8',
          200: '#fdf6a4',
          300: '#fbf180',
          400: '#f9ed64',
          500: '#f6e84b',
          600: '#fcdd4c',
          700: '#f9c544',
          800: '#f6ae3b',
          900: '#f0882c',
        },
      },
    },
  },
  plugins: [],
}
