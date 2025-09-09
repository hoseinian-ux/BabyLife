/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        accentPink: "var(--color-accent-pink)",
        mint: "var(--color-mint)",
        yellowBrand: "var(--color-yellow)",
        grayLight: "var(--color-gray-light)",
        grayDark: "var(--color-gray-dark)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
