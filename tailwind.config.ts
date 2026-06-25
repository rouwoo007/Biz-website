import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F7F3",
          dark: "#EFECE7",
        },
        charcoal: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
          muted: "#4a4a4a",
        },
        copper: {
          DEFAULT: "#b5553a",
          50: "#fdf4f1",
          100: "#f8ddd5",
          200: "#f0b8a6",
          300: "#e08e72",
          400: "#cc6e4e",
          500: "#b5553a",
          600: "#97452f",
          700: "#793826",
          800: "#5c2b1d",
          900: "#3e1d13",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        "copper-glow": "0 0 20px rgba(181, 85, 58, 0.25)",
        card: "0 2px 16px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.1)",
        "float-lg": "0 30px 60px -20px rgba(26, 26, 26, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.1s ease both",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.16,1,0.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
