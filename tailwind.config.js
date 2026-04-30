/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        provagoRed: "#ef1b24",
        provagoDark: "#1f2327",
        provagoAsh: "#f3f4f6",
        provagoGray: "#8f9194",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}