
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
        custom: "1060px",
        custom2: "1080px",
        sm: "640px",
        md: "768px",
        lg: "1025px",
        xl: "1350px",
        xxl: "1890px",
      },

      keyframes: {
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromTop: {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideFromBottom: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideRight: "slideFromRight 0.8s ease-out",
        slideLeft: "slideFromLeft 0.8s ease-out",
        slideTop: "slideFromTop 0.8s ease-out",
        slideBottom: "slideFromBottom 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
