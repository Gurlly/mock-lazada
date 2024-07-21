/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {

      fontFamily: {
        "sans": ["Noto Sans", "sans-serif"]
      },

      colors: {
        "laz-red": "#d2232a",
        "laz-blue": "#0d165a",
        "laz-orange": "#f57224",
        "laz-light": "#eff0f5",
        "laz-gray": "#98a1a5",
        "laz-header": "#020202",
        "laz-header-two": "#3a4855",
        "laz-text": "#0c0000",
        "laz-banner": "#e70b3f",
        "laz-rating": "#f9ca57"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

