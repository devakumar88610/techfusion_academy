/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': '#2f2e81',
        'secondary': '#ecb71e',
        'primarylight': "#393f99",
      },

      shadow: {
        500: "rgba(112, 144, 176, 0.08)",
      },
    },

  },
  plugins: [],
}