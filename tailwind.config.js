/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        glitchTextBreak: "glitchTextBreak 0.9s infinite",

      },
      

      keyframes: {
        glitchTextBreak: {
          "0%": { transform: "translate(0)", opacity: "1", textShadow: "0 0 5px #0ff, 0 0 10px #f0f" },
          "20%": { transform: "translate(-3px, 3px) skewX(-5deg)", opacity: "0.8", textShadow: "0 0 8px #0ff, 0 0 15px #f0f" },
          "40%": { transform: "translate(3px, -3px) skewX(5deg)", opacity: "0.6", textShadow: "0 0 12px #0ff, 0 0 20px #f0f" },
          "60%": { transform: "translate(-3px, -3px) skewX(-5deg)", opacity: "0.8", textShadow: "0 0 8px #0ff, 0 0 15px #f0f" },
          "80%": { transform: "translate(3px, 3px) skewX(5deg)", opacity: "1", textShadow: "0 0 5px #0ff, 0 0 10px #f0f" },
          "100%": { transform: "translate(0)", opacity: "1", textShadow: "0 0 5px #0ff, 0 0 10px #f0f" },
        },
      },

      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    
    },
  },

  plugins: [],
};
