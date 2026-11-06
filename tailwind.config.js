/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6433',
          light: '#FFF0ED',
        },
        secondary: '#2B2B43',
        background: '#F9FAFC',
        card: '#FFFFFF',
        text: {
          DEFAULT: '#1F2937',
          muted: '#6B7280',
        },
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
};
