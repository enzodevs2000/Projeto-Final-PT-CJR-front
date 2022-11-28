/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'fonte-padrao': ['"Inter"', 'sans-serif'],
    },
    extend: {
      colors: {
        "clr-login": "#EDEDE9",
        "azul-escuro": "#577590",
        "btn-login-hover": "#97AACC",
        "btn-font-color": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
