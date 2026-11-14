/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        "fade-in": "fade-in 400ms ease-out",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#15131A",
          2: "#1B1522",
          3: "#211829",
          4: "#271B31",
        },
        lavender: "#CDB4DB",
        lilac: "#DDB8FF",
        ink: "#E7E3ED",
        mist: "#9C93AA",
      },
    },
  },
  plugins: [],
}

