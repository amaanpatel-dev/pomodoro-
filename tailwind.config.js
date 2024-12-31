/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Roboto Mono", "monospace"], // Add Roboto Mono to the "mono" font stack
      },
      colors: {
        background: "#C36868", // Custom background color
        primary: "#B3BCBB", // Custom primary color
        button: "#323232", // Custom button color
        btn2: "#96B8B8",
      },
    },
  },
  plugins: [],
};
