/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Fixed path: looking in /src instead of /src/client
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        gold: {
          DEFAULT: '#FFD700',
          50: '#FFF9E5',
          100: '#FFF3CC',
          200: '#FFE799',
          300: '#FFDB66',
          400: '#FFCF33',
          500: '#FFD700', // Authentic Gold
          600: '#CCA900',
          700: '#997F00',
          800: '#665500',
          900: '#332A00',
        },
        dark: {
          DEFAULT: '#000000',
          50: '#1a1a1a', // Soft charcoal for cards
          100: '#141414',
          200: '#0f0f0f',
          300: '#0a0a0a',
          400: '#050505',
          500: '#000000',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.2)',
        'glow-lg': '0 0 40px rgba(255, 215, 0, 0.3)',
        'glow-gold': '0 0 15px rgba(255, 215, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(255, 215, 0, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
