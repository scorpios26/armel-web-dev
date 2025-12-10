// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        scan: "scan 1.5s ease-in-out infinite",
        fadeOut: "fadeOut 2s ease forwards",
        orbit: "orbit 2s linear infinite", // new orbit animation
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" },
        },
        scan: {
          "0%": { transform: "translateY(-40px)" },
          "50%": { transform: "translateY(40px)" },
          "100%": { transform: "translateY(-40px)" },
        },
        orbit: { // new orbit keyframes
          "0%": { transform: "rotate(0deg) translateX(70px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(70px) rotate(-360deg)" },
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
