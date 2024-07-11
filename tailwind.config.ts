import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#133A6F",
        green: "#03D69D",
        "gray-200": "#E5E5E5",
        "gray-600": '#AFAFAF',
        "gray-800": "#4D4D4D",
      }
    },
  },
  plugins: [],
};
export default config;
