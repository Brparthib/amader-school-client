/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: "#070F2B",
        secondary: "#1B1A55",

        heading: "#01161e",
        body: "#353535",

        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Fira Sans", "sans-serif"],
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [require("daisyui")],
}

