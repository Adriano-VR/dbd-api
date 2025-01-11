import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      dark:{
        colors:{
          primary:{
              DEFAULT: "#D32F2F",
              foreground: "#fff",
          },
          secondary:{
            DEFAULT: "#E0E0E0",
            foreground: "#E0E0E0",
        },
        }
      }
    }
  })],
} satisfies Config;
