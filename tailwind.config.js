/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F018B",
        primarygray: "#828282",
        primarygreen: "#38F2AF",
        secondarygray: "#E0E0E0",
        overlay: "#4f018b49",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      borderColor: {
        primary: "#DAFFF2",
      },
    },
  },
  plugins: [],
};
