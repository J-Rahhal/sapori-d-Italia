/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: "PlaywriteHR",
        lavishly: "LavishlyYours",
        vujahday: "VujahdayScript",
        homemade: "HomemadeApple",
        Sans: "sans-serif",
      },
    },
    screens: {
      "xs-mobile": "320px",
      mobile: "400px",
      "sm-tablet": "768px",
      "md-tablet": "884px",
      tablet: "1024px",
      laptop: "1280px",
      desktop: "1440px",
    },
  },
  plugins: [],
};
