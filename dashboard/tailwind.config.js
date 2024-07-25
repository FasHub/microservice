/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: 'Roboto',
      },
      colors: {
        appColor: {
          1: 'hsl(var(--color-appColor1) / <alpha-value>)',
          2: 'hsl(var(--color-appColor2) / <alpha-value>)',
          3: 'hsl(var(--color-appColor3) / <alpha-value>)',
          4: 'hsl(var(--color-appColor4) / <alpha-value>)',
          5: 'hsl(var(--color-appColor5) / <alpha-value>)',
        },
        content: {
          0: 'hsl(var(--color-content0) / <alpha-value>)',
          1: 'hsl(var(--color-content1) / <alpha-value>)',
          2: 'hsl(var(--color-content2) / <alpha-value>)',
          3: 'hsl(var(--color-content3) / <alpha-value>)',
        },
      },
      animation: {
        'spin-slower': 'spin 35s ease infinite',
        'spin-slow': 'spin 25s ease-in-out infinite reverse',
      },
      screens: {
        mobile: '280px',
        // => @media (min-width: 320px) { ... }

        tablet: '480px',
        // => @media (min-width: 640px) { ... }

        laptop: '768px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1200px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
