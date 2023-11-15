/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2874A6",
        secondary: "#233a5e",
        accent: "#ff7a2c",
        danger: "#ff0000",
        success: "#00ff2e"
      }
    },
  },
  plugins: [],
}

