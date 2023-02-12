/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#0B0C10',
        'my-gray': '#1F2833',
        'my-white': '#C5C6C7',
        'my-white-blue': '#66FCF1',
        'my-dark-blue': '#45A29E',
      },
    },
  },
  plugins: [],
}
