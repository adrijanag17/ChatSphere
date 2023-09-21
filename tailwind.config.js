/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dis_blurple: "#5865F2",
        dis_black: "#23272A",
        dis_grey: "#2C2F33",
        dis_blue: "#404EED",
        dis_light_grey: "#99AAB5",
        dis_ivory: "#F6F6F6",
        dis_brown: "#582812",
        dis_pink: "#EB459E",
        dis_yellow: "#FEE75C",
        dis_green: "#57F287",
        dis_server: '#202225'
      },
      height: {
        "55vh": "55vh",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

