/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        marine:{
          "500":"#023047",
          "600":"#012739"
        }
      },
      fontFamily: {
        sans: ['Jetbrains Mono',"monospace"]
      }
    }
  },
  plugins: [],
}
