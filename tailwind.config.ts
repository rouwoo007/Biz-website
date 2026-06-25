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
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      boxShadow: {
        "copper-glow": "0 0 20px rgba(181, 85, 58, 0.25)",
        card: "0 2px 16px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
