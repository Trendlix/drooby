/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'roc-grotesk': ['var(--font-roc-grotesk)', 'Arial', 'Helvetica', 'sans-serif'],
            },
            colors: {
                main: {
                    'bold-gray': '#666666',
                    'white': '#fff',
                    'black': '#000',
                    'mediterranean-green': '#3a9a99',
                    'mediterranean-green-dark': '#2d7a79',
                    'true-black': '#0a0a0a',
                    'white-marble': '#e5e7eb',
                    'matte-black': '#171717',
                    'myrtle-green': '#2d7a79',
                    'titanium-white': '#f3f4f6',
                    'royal-aqua': '#00b8db',
                    'dodger-blue': '#2b7fff',
                    'bright-emerald-green': '#00bc7d',
                    'blue-green': '#00bba7',
                    'anti-flash-white': '#f2f2f4',
                    'black-charcoal': '#212121',
                    'casual-black': '#181818',
                    'section-title-gray': '#0A0A0A',
                    'lightGray':'#f5f5f7',
                    'gray-light':'#717182',
                },
            },
            backgroundImage: {
                'gradient-1': 'linear-gradient(90deg, #3a9a99, #2d7a79)',
                'gradient-2': 'linear-gradient(90deg, #00b8db, #2b7fff)',
                'gradient-3': 'linear-gradient(90deg, #00bc7d, #00bba7)',
                'gradient-4': 'linear-gradient(90deg, #ff6900, #f54900)',
            },
        },
    },
    plugins: [],
}