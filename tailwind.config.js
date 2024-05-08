import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          extend: 'light',
          colors: {
            default: {
              DEFAULT: '#FFFFFF',
              // foreground: 'rgb(15 23 42)',
            },
            primary: {
              DEFAULT: '#23A6F0',
              // foreground: 'rgb(15 23 42)',
            },
            secondary: {
              DEFAULT: '#8EC2F2',
              // foreground: 'rgb(15 23 42)',
            },
            focus: '#FFF666',
          },
        },
      },
    }),
  ],
};
