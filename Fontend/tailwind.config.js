/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#302f2f",
      secondary: "#FACC15",
      borderColor: "#c3cbda",
      inputBgColor: "rgb(234 242 254)",
      hoverBgColor: "rgb(208 219 237)",
      btnOne:"rgb(184 202 238)",
      btnOneHoverColor: "rgb(81 119 176)"
    },
  },
};
export const plugins = [];
