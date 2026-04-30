/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        base: ["17px", "28px"],
        lg: ["18px", "30px"],
        xl: ["20px", "32px"],
      },
      colors: {
        provagoRed: "#ef1b24",
        provagoDark: "#1f2327",
        provagoText: "#6f7377",
        provagoHeading: "#3a3d40",
        provagoMuted: "#9aa0a6",
        provagoAsh: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}