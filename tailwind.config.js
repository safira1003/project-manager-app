/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', "cursive"],
      },
      colors: {
        navy: "#2f4156",
        teal: "#567c8d",
        skyBlue: "#c8d9e6",
        beige: "#f5efeb",
      },
    },
  },
  plugins: [],
};
