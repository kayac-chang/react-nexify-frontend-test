module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        indigo: {
          button: "#3f51b5",
        },
        red: {
          button: "#f44336",
        },
        pink: {
          button: "#e91e63",
        },
      },
      boxShadow: {
        "1dp": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        "2dp": "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "3dp": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        "4dp": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@whiterussianstudio/tailwind-easing")],
};
