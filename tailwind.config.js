/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./lib/**/*.{js,ts,jsx,tsx}" 
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',
        'secondary': '#1a1a1a',
        'accent': '#f5f5f5',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        'primary-light': '#F9FAFB', 
        'secondary-light': '#FFFFFF',
        'accent-light': '#0EA5E9', 
        'text-primary-light': '#1F2937', 
        'text-secondary-light': '#6B7280', 
      },
      fontFamily: {
          sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}