/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        papier: "#F7F5F0",
        encre: "#1F2421",
        mousse: "#4A5D46",
        argile: "#B4653A",
        pierre: "#8B8C89",
        pierreclaire: "#E4E1D8",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
