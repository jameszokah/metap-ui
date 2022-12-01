/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14E8D8",
        "dark-primary": "#1A222E",
        "semi-dark": "#1F2937",
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("tailwind-scrollbar-hide"),
    require('tw-elements/dist/plugin'),
  ],
};
