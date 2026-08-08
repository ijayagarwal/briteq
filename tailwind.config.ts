import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B12",
        paper: "#F4F2EC",
        acid: "#D8FF45",
        electric: "#5736D1",
        magenta: "#F02BAA",
        sky: "#72D7FF",
        navy: {
          950: "#080811",
          900: "#11111D",
          800: "#1B1B2B",
          700: "#29293D",
          600: "#3C3C54",
        },
        purple: {
          700: "#5139D9",
          600: "#6C52FF",
          500: "#806AFF",
          400: "#A293FF",
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        crisp: "8px 8px 0 #0B0B12",
        "crisp-sm": "4px 4px 0 #0B0B12",
        glow: "0 24px 80px rgba(108, 82, 255, 0.24)",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        48: "0.48",
        55: "0.55",
        62: "0.62",
        65: "0.65",
        68: "0.68",
        72: "0.72",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 5s ease-in-out infinite",
        "float-delayed": "float 5s 1.2s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--tilt, 0deg))" },
          "50%": { transform: "translateY(-10px) rotate(var(--tilt, 0deg))" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
