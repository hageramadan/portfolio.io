/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      screens: {
        'custom': '1060px',
        'custom2': '1080px',
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1350px",
        xxl: "1890px",

      },
     
    },
  },
  plugins: [],
};
