/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Dana", "sans-serif"],
      serif: ["Kalameh", "serif"],
    },
  },
  plugins: [require("daisyui")],

  // daisyui config
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#542112",
          secondary: "#D2AC67",
          accent: "#5757FF",
          neutral: "#FFC757",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
          "base-100": "#000",
          "base-200": "#6B7280",
          "base-300": "#374151",
          "base-content": "#111827",
        },
      },
      "forest",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
  },
};
