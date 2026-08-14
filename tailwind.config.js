/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        canvas: "#15131A",
        lavender: "#CDB4DB",
        ink: "#E7E3ED",
        mist: "#9C93AA",
      },
    },
  },
  plugins: [],
}

