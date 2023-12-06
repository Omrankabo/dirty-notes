/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['inter' , 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#03191e',
        secondary: '#ffe066',
        third:'#70c1b3',
        outerSpace:'#4a5759',
        bg:' rgba(112, 193, 179, 0.2)'
      },
    },
  },
  plugins: [],
};
