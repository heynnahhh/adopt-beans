import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "pumpkin-orange": "#FF7828",
        "ecru-white": "#F9F3E8",
        "faded-orange": "#FD9659",
        "bright-cerulean": "#28AFFF",
        "shadow-green": "#96BBC5",
        "charcoal-grey": "#393536",
        "eggplant-violet": "#732654",
        "ash": "#CBC2B5"
      }
    },
  },
  plugins: [],
};
export default config;
