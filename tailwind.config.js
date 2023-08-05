import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Inknut Antiqua"', "system-ui", "sans-serif"],
      display: ['"Charm"', "system-ui", "sans-serif"],
      accent: ['"Island Moments"', "system-ui", "sans-serif"],
    },
    colors: {
      sandstone: "#B2A18D",
      "dark-sandstone": "#8F7A54",
    },
  },
  plugins: [daisyui],
};
