import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#111111",
        },
        forge: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        iron: {
          DEFAULT: "#1a1a1a",
          light: "#242424",
          mid: "#2d2d2d",
          border: "#3a3a3a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "metal-texture":
          "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        "forge-gradient":
          "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #111111 0%, #1a1a1a 50%, #0d0d0d 100%)",
        "hero-overlay":
          "linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.7) 60%, rgba(17,17,17,0.3) 100%)",
      },
      animation: {
        "spark-float": "sparkFloat 3s ease-in-out infinite",
        "forge-pulse": "forgePulse 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        sparkFloat: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.7" },
          "50%": { transform: "translateY(-20px) rotate(180deg)", opacity: "1" },
        },
        forgePulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(249, 115, 22, 0.7)" },
        },
        slideUp: {
          from: { transform: "translateY(40px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        borderGlow: {
          from: { borderColor: "rgba(249,115,22,0.3)" },
          to: { borderColor: "rgba(249,115,22,0.8)" },
        },
      },
      boxShadow: {
        forge: "0 0 30px rgba(249, 115, 22, 0.4)",
        "forge-lg": "0 0 60px rgba(249, 115, 22, 0.3)",
        steel: "0 4px 30px rgba(0,0,0,0.5)",
        "steel-lg": "0 8px 60px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
