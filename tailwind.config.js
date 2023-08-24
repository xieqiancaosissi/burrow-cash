/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { min: "400px", max: "639px" },
      sm: { min: "640px", max: "767px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      // xs: { min: "300px", max: "600px" },
      // xsm: { min: "300px", max: "1023px" },
      // md: { min: "600px", max: "1023px" },
      // lg: { min: "1024px" },
      lg2: { min: "1092px" },
      // xl: { min: "1280px" },
      // "2xl": { min: "1536px" },
      "3xl": { min: "1792px" },
    },
    boxShadow: {},
    extend: {
      backgroundImage: () => ({}),
      gridTemplateColumns: {
        "3/5": "65% 35%",
      },
      gridTemplateRows: {},
      fontSize: {
        h1: "90px",
        h2: "26px",
        h3: "18px",
      },
      colors: {
        primary: "#D2FF3A",
        dark: {
          50: "#31344D",
          100: "#2E304B",
          200: "#14162B",
          300: "#4F5178",
          400: "#6D708D",
        },
        red: {
          50: "#FF6BA9",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#C0C4E9",
          380: "#6D708D",
          400: "#626486",
          500: "#565874",
          700: "#494D69",
          800: "#23253A",
          900: "#0f101c",
        },
      },
    },
    plugins: [],
  },
  plugins: [],
};