import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  theme: {
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

        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },

        edboard: {
          ink: "hsl(var(--edboard-ink) / <alpha-value>)",
          graphite: "hsl(var(--edboard-graphite) / <alpha-value>)",
          blue: "hsl(var(--edboard-blue) / <alpha-value>)",
          cyan: "hsl(var(--edboard-cyan) / <alpha-value>)",
          paper: "hsl(var(--edboard-paper) / <alpha-value>)",
          muted: "hsl(var(--edboard-muted) / <alpha-value>)",

          /* Compatibility with existing components */
          dark: "hsl(var(--edboard-ink) / <alpha-value>)",
          accent: "hsl(var(--edboard-blue) / <alpha-value>)",
          light: "hsl(var(--edboard-paper) / <alpha-value>)",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ['"Bebas Neue"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        editorial: ['"Libre Baskerville"', "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
      },

      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },

        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },

        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 5px 2px rgba(20, 123, 255, 0.3)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 25px 5px rgba(20, 123, 255, 0.8)",
          },
        },

        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "slide-down": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "rotate-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },

        "text-shimmer": {
          "0%": {
            backgroundPosition: "200% 0",
          },
          "100%": {
            backgroundPosition: "-200% 0",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "slide-down": "slide-down 0.8s ease-out forwards",
        "rotate-slow": "rotate-slow 10s linear infinite",
        "text-shimmer": "text-shimmer 3s ease infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        typing: "typing 3.5s steps(40, end)",
        "cursor-blink": "blink 1s step-end infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;