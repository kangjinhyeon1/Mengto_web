import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // color 기본 세팅
      colors:{
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        main: '#97A9FF',
        sub: '#888EBA',
        gray:{
          900: '#181919',
          800: '#313233',
          700: '#494B4C',
          600: '#626566',
          500: '#7A7E80',
          400: '#939799',
          300: '#ACB1B3',
          200: '#C4C9CC',
          100: '#E6E9EB',
          50: '#F2F4F5'
        },
      },
      boxShadow:{
        'm': '0 4px 4px 0 #C4C9CC'
      },
      // font 기본 세팅
      fontSize:{
        titleLarge: [
          "28px",
        {
          fontWeight: 700,
          lineHeight: "28px",
        }
        ],
        titleMedium:[
          "20px",
          {
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: "0.15%"
          }
        ],
        titleSmall:[
          "14px",
          {
            fontWeight: 500,
            lineHeight: "20px",
            letterSpacing: "0.1%"
          }
        ],
        bodyLarge:[
          "16px",
          {
            fontWeight: 400,
            lineHeight: "24px",
            letterSpacing: "0.5%"
          }
        ],
        bodyMeidum:[
          "14px",
          {
            fontWeight: 400,
            lineHeight: "20px",
            letterSpacing: "0.25%"
          }
        ],
        bodySmall:[
          "12px",
          {
            fontWeight: 400,
            lineHeight: "16px",
            letterSpacing: "0.4%"
          }
        ],
      }
    },
  },
  plugins: [],
};
export default config;
