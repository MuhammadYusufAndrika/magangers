import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'dmserif': ['DM Serif Text', 'serif']
      },
      colors: {
        'brown' : {
          100 : '#7c654d',
          300 : '#725b42',
          500 : '#675038',
          700 : '#563d23',
          900 : '#492e12'
        }
      }
    },
  },
  plugins: [],
};
export default config;
