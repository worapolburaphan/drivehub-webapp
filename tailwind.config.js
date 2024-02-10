/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          500: "#3B82F6",
        },
        gray: {
          900: "#111827",
        },
        red: {
          500: "#F40202",
        },
      },
    },
  },
  plugins: [],
});

export default config;
