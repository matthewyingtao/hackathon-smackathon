import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Inknut Antiqua"', "system-ui", "sans-serif"],
      display: ['"Imperial Script"', "system-ui", "sans-serif"],
      accent: ['"Island Moments"', "system-ui", "sans-serif"],
    },
  },
  plugins: [daisyui],
};
