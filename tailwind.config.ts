import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px", // => @media (min-width: 420px) { ... }
      },
      colors: {
        primary: "#f27128",
        secondary: "#ffc326",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
