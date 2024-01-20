/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      lato: ["lato"],
      dancing: ["Dancing Script"],
      noto: ["Noto"]
    }},
    colors: {
      black: '#000000',
      white: "#ffffff",
      olive: "#1f271b",
      honey: "#F3FCF0",
      yellow: "#fff3b2",
      blue: "#21E3FD"
    }
  },
  plugins: [require("daisyui")],
}

