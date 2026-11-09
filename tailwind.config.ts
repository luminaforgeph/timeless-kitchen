import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#F7F3EA",
        oat: "#E9DFC9",
        "palm-leaf": "#35483A",
        cocoa: "#48382F",
        guava: "#C56B52",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
      },
      maxWidth: {
        editorial: "1360px",
      },
      spacing: {
        gutter: "24px",
      },
      letterSpacing: {
        editorial: "-0.035em",
        label: "0.12em",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
