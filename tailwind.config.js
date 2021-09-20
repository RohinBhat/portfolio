module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      primary: ["IBM Plex Mono", "Times", "serif"],
      secondary: ["Poppins", "Helvetica", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
