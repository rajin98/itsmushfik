import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: {
        DEFAULT: "#ffffff",
      },
      red: {
        light: "#96505b",
        DEFAULT: "#8d414d",
      },
      yellow: "#d9b6a3",
      blue: {
        DEFAULT: "#324359",
        dark: "#092126",
      },
      black: "#333333",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      serif: ["Red Hat Mono", "serif"],
    },
  },
  plugins: [],
};
export default config;
