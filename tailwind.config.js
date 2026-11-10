/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EFF3FF",
          100: "#DBE4FE",
          200: "#BFCEFE",
          300: "#93B0FD",
          400: "#608AFA",
          500: "#3B6BF6",
          600: "#1536D6", // Brand Royal Blue
          700: "#122BB2",
          800: "#13258F",
          900: "#152371",
          950: "#0D1445",
          DEFAULT: "#1536D6",
          foreground: "#FFFFFF",
        },
        magenta: {
          50: "#FDF4FD",
          100: "#FAE9FA",
          200: "#F5D2F6",
          300: "#EEADEE",
          400: "#E47EE4",
          500: "#D96BD9", // Brand Accent Magenta
          600: "#BA4BBA",
          700: "#993799",
          800: "#7E2E7E",
          900: "#672B66",
          DEFAULT: "#D96BD9",
          foreground: "#FFFFFF",
        },
        lime: {
          50: "#F7FDE8",
          100: "#EEFBCF",
          200: "#DCF7A3",
          300: "#C7F06F",
          400: "#B5E04A", // Brand Accent Lime
          500: "#98C52E",
          600: "#759D1E",
          700: "#57761B",
          800: "#465E1B",
          900: "#3C4F1B",
          DEFAULT: "#B5E04A",
          foreground: "#1A2E05", // Accessible dark contrast text on lime
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Noto Sans Thai"',
          '"Sarabun"',
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"SFMono-Regular"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      borderRadius: {
        DEFAULT: "0.5rem", // 8px
        md: "0.5rem", // 8px
        lg: "0.625rem", // 10px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 23, 42, 0.05)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.06), 0 1px 2px -1px rgba(15, 23, 42, 0.04)",
        "card-hover":
          "0 6px 16px -2px rgba(21, 54, 214, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};
