/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui"), 
    require('tailwind-scrollbar')
  ],
  daisyui: {
    themes: ["night", "winter", "synthwave", "cyberpunk"],
  },
  variants: {
    scrollbar: ['rounded']
  }
}
