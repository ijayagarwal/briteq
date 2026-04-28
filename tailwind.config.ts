import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0820",
          900: "#0F0E2E",
          800: "#1E1B4B",
          700: "#2D2A6E",
          600: "#3D3A8C",
        },
        magenta: {
          600: "#C71585",
          500: "#D946A8",
          400: "#E91E8B",
          300: "#F472B6",
        },
        purple: {
          700: "#6D28D9",
          600: "#7C3AED",
          500: "#9333EA",
          400: "#A855F7",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #0F0E2E 0%, #1E1B4B 40%, #6D28D9 80%, #D946A8 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #1E1B4B 0%, #6D28D9 60%, #D946A8 100%)",
        "led-dots":
          "radial-gradient(circle, rgba(217,70,168,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "led-grid": "24px 24px",
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(217,70,168,0.45)",
        "glow-purple": "0 0 60px -10px rgba(147,51,234,0.45)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
