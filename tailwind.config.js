/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f6fbf6",
          100: "#eef7ee",
          200: "#dff0dd",
          300: "#cfe8cc",
          400: "#9fd39a",
          500: "#6fbf68",
          700: "#2f7a2f",
          950: "#0b120b",
          975: "#061006",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
