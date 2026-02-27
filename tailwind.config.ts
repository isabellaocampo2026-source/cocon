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
                brand: {
                    DEFAULT: '#6D28D9', // Deep Purple (Trust, Sleep, Premium)
                    light: '#8B5CF6',
                    lighter: '#EDE9FE', // Very soft lavender background
                    dark: '#4C1D95',
                },
                base: {
                    bg: '#FAFAFA', // Off-white, clinical clean
                    surface: '#FFFFFF', // Pure white cards
                    text: '#171717', // Near-black for maximum readability
                    muted: '#52525B', // Gray for secondary text
                },
                accent: {
                    green: '#059669', // Strong conversion green (COD/Buy button)
                    greenHover: '#047857',
                    gold: '#F59E0B', // For review stars
                    red: '#DC2626', // For discount tags or sale pricing
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-up': 'slide-up 0.5s ease-out forwards',
            },
            keyframes: {
                'fade-in': {
                    'from': { opacity: '0' },
                    'to': { opacity: '1' },
                },
                'slide-up': {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        },
    },
    plugins: [],
};
export default config;
