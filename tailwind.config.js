/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "linear-gradient-1":
          "linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .8))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-primary": "#BA68C8",
        "color-secondary": "#D4D5F5",
        "color-secondary-2": "#F5F4FF",
        "black-cus-1": "#111111",
        "white-cus-1": "#FFFFFF",
        "gray-cus-1": "#ABABAB",
        "gray-cus-2": "#ABABAB",
      },
      fontFamily: {
        "Nunito-Sans": "Nunito Sans",
        Manrope: "Manrope",
      },
    },
  },
  plugins: [],
};
