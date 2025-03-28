/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif'],
      },
      colors: {
        'macos': {
          'blue': '#0071e3',
          'gray': '#86868b',
          'light': '#fbfbfd',
          'dark': '#1d1d1f',
        }
      },
      transitionTimingFunction: {
        'macos': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'macos-fade': 'macos-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'macos-fade': {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
