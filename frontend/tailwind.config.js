/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBg: "#caf0f8",
        headerBg: "#90e0ef"
      }
    },
  },
  plugins: [],
}

