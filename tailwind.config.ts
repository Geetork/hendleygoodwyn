import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero-bg': "url('/banner.gif')"
      },
      screens: {
        "xs": "320px",
      },
      textColor: {
        primary: "rgb(0, 188, 245)",
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "animate-appear": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        }
      },
      animation: {
        slideInLeft: 'slide-in-left 1s ease-in-out 0.2s 1',
        appear: 'animate-appear 0.2s ease-in-out',
        appearLong: 'animate-appear 2s ease-in-out',
      }
    },
  },
  plugins: [],
};
export default config;
