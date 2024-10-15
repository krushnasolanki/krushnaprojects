import { Container } from "postcss";
import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/components/(tabs|tab|progress|slider|modal|pagination).js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '22': '5.25rem',
        '38': '9.375rem',
        '84': '20.875rem'
      },
      maxWidth: {
        '23xl': '1340px',
      },
      fontSize: {
        xsm: '11px',
        xsm2: '13px',
        sm: '14px',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        'fs20': '20px',
      },
      colors:{
        'white': '#fff',
        'black': '#000',
        gray: {
          '100': '#e5e7eb',
          '200': '#9BA0A6',
          '300': '#858585',
          '400': '#7D7D88',
          '500': '#3A3D43',
          '600': '#202125',
          '700': '#2A2B2F',
          '800': '#C0C1C5',
          '900': '#7D7D88'
        },
        green: {
          'light': '#F2FCE4',
          'extralight':'#E5F8BE',
          '100': '#ACCCB6',
          '200': '#C1F844',
          '300': '#246659',
          '400': '#1A3D36',
          '500': '#83CA34',
          'secondary': '#83CA34',
          'slidercolor': '#AEE76F',
          'dark': '#028541'
        },
        red: {
          '100': '#FF5D53',
          '200':'#bb2d3b'
        },
        pink: {
          'light': '#FEEFEA',
        },
        yellow:{
          '100': '#FFC953'
        },
        amber: {
          '1000': '#FFAF00'
        },
        blue:{
          'dark':'#02A2C0'
        },
        straintag:{
          '100': '#0191AB',
          '200': '#344A5E',
          '300': '#1B9E7C'
        },
      },
      borderRadius: {
        '10': '10px',
      }
    },
     
  },
  plugins: [nextui({
    themes: {
      light: {
        // ...
        colors: {
          primary: {
            //... 50 to 900
            foreground: "#C1F844",
            DEFAULT: "#C1F844",
          },
        },
      },
      dark: {
        // ...
        colors: {
          
        },
      },
      // ... custom themes
    },
  })],
};
export default config;

