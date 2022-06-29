module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../img/sanFranciscoDesktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        LA: "url('../img/card1.jpg')",
        mexico: "url('../img/mexico.jpeg')",
        seattle: "url('../img/seattle.jpg')",
        new_york: "url('../img/new_york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/card2.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
        nubecitas: "url('../img/gotitas-2.jpeg')",
        loguito: "url('../img/loguito.png')",
        
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        terciary: "#61AEC9",
      }),
      textColor: {
        primary: "#465698",
        secondary: "#465698",
        terciary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
