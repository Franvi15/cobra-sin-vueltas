import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF7F2",
        surface: "#FFFFFF",
        well: "#F4F0E8",
        ink: "#191917",
        "ink-2": "#57534E",
        "ink-3": "#8A857D",
        line: "#E8E3DA",
        "line-strong": "#D5CFC4",
        brand: { DEFAULT: "#0F766E", dark: "#0B5F58", soft: "#E7F2F0" },
        coral: { DEFAULT: "#F97355", soft: "#FEEDE8", ink: "#B5432A" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      maxWidth: { content: "1160px" },
      boxShadow: {
        card: "0 1px 2px rgba(25,25,23,0.04), 0 8px 24px -10px rgba(25,25,23,0.08)",
        lift: "0 2px 4px rgba(25,25,23,0.05), 0 16px 32px -12px rgba(25,25,23,0.12)",
      },
      letterSpacing: { display: "-0.035em", heading: "-0.025em" },
    },
  },
  plugins: [],
};
export default config;
