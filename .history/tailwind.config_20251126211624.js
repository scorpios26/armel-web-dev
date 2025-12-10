// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
        
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, 
          // 👆 important: use -50% if you duplicate the list,
          // so the animation loops seamlessly
        },
      },
    },
  },
  plugins: [],
};
