/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#171717",
        foreground: "#232323",
        white: "#FFFFFFCC",
        whiteFaded: "#FFFFFF80",
        accent: "#2ADDC0",
        "border-color": "rgba(255, 255, 255, 0.10)",
      },
      fontSize: {
        title: "32px",
        "title-sm": "38px",
        "title-md": "48px",
        "title-lg": "64px",
        "title-xl": "72px",

        "text-sm": "16px",
        "text-md": "22px",
        menu: "16px",
      },
    },
    borderRadius: {
      sm: "12px",
      md: "20px",
      lg: "30px",
      xl: "36px",
    },
  },
  plugins: [],
  // safelist: ["bg-background", "text-foreground"],
};
