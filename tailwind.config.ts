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
        brand: { DEFAULT: "#0F766E", dark: "#0B5F58", soft: "#E7F2F0", bright: "#2DD4BF", mint: "#99F6E4" },
        night: { DEFAULT: "#071F1C", 2: "#0B2B27", 3: "#0B3D38", line: "#1C4A44" },
        coral: { DEFAULT: "#F97355", soft: "#FEEDE8", ink: "#B5432A" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      maxWidth: { content: "1200px" },
      boxShadow: {
        card: "0 1px 2px rgba(25,25,23,0.04), 0 8px 24px -10px rgba(25,25,23,0.08)",
        lift: "0 2px 4px rgba(25,25,23,0.05), 0 16px 32px -12px rgba(25,25,23,0.12)",
        panel: "0 1px 0 rgba(255,255,255,0.6) inset, 0 0 0 1px rgba(25,25,23,0.06), 0 30px 60px -20px rgba(7,31,28,0.25), 0 12px 24px -12px rgba(7,31,28,0.12)",
        mock: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.6), 0 20px 40px -20px rgba(0,0,0,0.4)",
        cta: "0 1px 0 rgba(255,255,255,0.25) inset, 0 10px 24px -8px rgba(249,115,85,0.55)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-r": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        marquee: "marquee 70s linear infinite",
        "marquee-r": "marquee-r 80s linear infinite",
        "fade-in": "fade-in .45s cubic-bezier(.2,.7,.2,1) both",
      },
      letterSpacing: { display: "-0.045em", heading: "-0.03em" },
    },
  },
  plugins: [],
};
export default config;
