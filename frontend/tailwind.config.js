/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      container: {
        padding: '1rem', 
        center: true,
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(300%)' },
          to: { transform: 'translateX(-100%)' },
        },  
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
        gradient: "gradient 20s linear infinite",
       
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};