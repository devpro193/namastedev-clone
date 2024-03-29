import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      "phone": "530px",
      "tab": "1070px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        headBanner: {
          DEFAULT: "#8A0000"
        },
        bannerButton: {
          DEFAULT: "#28A745"
        },
        head: "#006B5D",
        prime: "#079281",
        bg: "#112121",
        second: "#134543",
        footer: "#031211"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
        'loop-scroll': {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-75%)" },
        },
        'loop-scroll-reverse': {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        'rotate-clock': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-anticlock': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        "show": {
          "10%": { transform: "translateY(0px)" },
          "30%": { transform: "translateY(-40px)" },
          "70%": { transform: "translateY(-40px)" },
          "90%": { transform: "translateY(0px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'gradient': 'gradient 2s linear infinite',
        "loop-scroll": "loop-scroll 30s linear infinite",
        "loop-scroll-reverse": "loop-scroll-reverse 30s linear infinite",
        "rotate-clock": "rotate-clock 10s linear infinite",
        "rotate-anitclock": "rotate-anticlock 10s linear infinite",
        "show": "show 10s ease-in-out infinite"
      },
      fontFamily: {
        jakarta: ['var(--font-jakarta)'],
        inter: ['var(--font-inter)'],
        spaceMono: ['var(--font-space-mono)'],
        mulish: ['var(--font-mulish)'],
        mont: ['var(--font-mont)'],
      },
    },

  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config