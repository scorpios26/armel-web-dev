// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        scan: "scan 1.5s ease-in-out infinite",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-40px)" },
          "50%": { transform: "translateY(40px)" },
          "100%": { transform: "translateY(-40px)" },
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
