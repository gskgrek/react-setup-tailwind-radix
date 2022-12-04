/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({addVariant}) {
      // variants that help styling Radix-UI components
      addVariant('data-state-checked', '&[data-state="checked"]')
    }),
  ],
}
