import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Dusk-garden palette
        plum: "#241726",
        mauve: "#3A2438",
        rose: "#E8B4C4",
        blush: "#F9EFF2",
        champagne: "#D9B98A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scaleY(1) translateX(0)", opacity: "1" },
          "25%": { transform: "scaleY(1.08) translateX(-1px)", opacity: "0.92" },
          "50%": { transform: "scaleY(0.94) translateX(1px)", opacity: "1" },
          "75%": { transform: "scaleY(1.05) translateX(0)", opacity: "0.95" },
        },
        drift: {
          "0%": { transform: "translateY(-8vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translateY(108vh) rotate(340deg)", opacity: "0" },
        },
        bloom: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.12)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.12)" },
          "56%": { transform: "scale(1)" },
        },
      },
      animation: {
        flicker: "flicker 1.6s ease-in-out infinite",
        drift: "drift linear infinite",
        bloom: "bloom 0.9s ease-out both",
        heartbeat: "heartbeat 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
