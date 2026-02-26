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
                night: {
                    DEFAULT: '#0D0D1A',
                    light: '#141428',
                    lighter: '#1a1a35',
                },
                cocon: {
                    purple: {
                        DEFAULT: '#7C3AED',
                        light: '#8B5CF6',
                        dark: '#6D28D9',
                        glow: 'rgba(124, 58, 237, 0.3)'
                    },
                    green: '#34D399',
                    red: '#F87171',
                    gold: '#FBBF24',
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fade-in 0.6s ease-out forwards',
                'slide-up': 'slide-up 0.6s ease-out forwards',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                'fade-in': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-up': {
                    'from': { opacity: '0', transform: 'translateY(40px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'twinkle': {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
