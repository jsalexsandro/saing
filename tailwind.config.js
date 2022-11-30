/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        marine:{
          "400":"#005780",
          "500":"#023047",
          "600":"#012739",
          "700":"#002c41"
        }
      },
      fontFamily: {
        sans: ['Jetbrains Mono',"monospace"]
      }
    }
  },
  plugins: [],
}
