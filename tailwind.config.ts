import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E4E34', // Verde Escuro
          medium: '#4C7354',  // Verde Médio
          light: '#A2B9A3',   // Verde Claro
        },
        navy: {
          DEFAULT: '#1E3A5F', // Azul Marinho
        },
        neutral: {
          light: '#D8DAD5',   // Cinza Suave
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      keyframes: {
        wave1: {
          '0%, 100%': { 
            transform: 'translateY(0) scaleY(1)',
          },
          '50%': { 
            transform: 'translateY(-15px) scaleY(0.95)',
          }
        },
        wave2: {
          '0%, 100%': { 
            transform: 'translateY(-5px) scaleY(1.05)',
          },
          '50%': { 
            transform: 'translateY(10px) scaleY(0.9)',
          }
        },
        wave3: {
          '0%, 100%': { 
            transform: 'translateY(0) scaleY(1)',
          },
          '50%': { 
            transform: 'translateY(-20px) scaleY(1.1)',
          }
        },
        sun: {
          '0%, 100%': { 
            transform: 'translate(-50%, 0) scale(1)',
            opacity: 0.8,
          },
          '50%': { 
            transform: 'translate(-50%, 5px) scale(1.05)',
            opacity: 0.9,
          }
        },
        'cloud-1': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100vw)' },
          '50.1%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        'cloud-2': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100vw)' },
          '50.1%': { transform: 'translateX(100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        reflection: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
        }
      },
      animation: {
        wave1: 'wave1 3s ease-in-out infinite',
        wave2: 'wave2 2.5s ease-in-out infinite',
        wave3: 'wave3 2s ease-in-out infinite',
        sun: 'sun 6s ease-in-out infinite',
        'cloud-1': 'cloud-1 30s linear infinite',
        'cloud-2': 'cloud-2 25s linear infinite',
        reflection: 'reflection 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
