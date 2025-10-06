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
          DEFAULT: "#bf2f1f",
          light: "#f8f1f6",
          dark: "#4a4845",
        },
        background: "#000000",
        midnight: "#0a0f1c",
        amber: "#f5b642",
        rose: "#d87fa2",
        stone: "#cfcfcf",
        ivory: "#f8f6f1",
        Golden_Yellow: "#f5c518",
      },
      backgroundImage: {
        'night-gradient': 'linear-gradient(to bottom, #000000, #0a0a0a, #1a1a1a)',
      },
      boxShadow: {
        gold: '0 0 20px rgba(193, 164, 109, 0.4)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        snow: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '10%': { opacity: '0.5' },
          '100%': { transform: 'translateY(110vh)', opacity: '0' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        snow: 'snow 25s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

