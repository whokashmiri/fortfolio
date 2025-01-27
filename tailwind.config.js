/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",

        bounce1: "bounce1 2s infinite",
        bounce2: "bounce2 2.5s infinite",
        bounce3: "bounce3 3s infinite",
        bounce4: "bounce4 3.5s infinite",
        bounce5: "bounce5 4s infinite",
        bounce6: "bounce6 4.5s infinite",

      },
      keyframes: {
         scroll: {
           "0%": { transform: "translateX(0)" },
           "100%": { transform: "translateX(-200%)" },
        },




        bounce1: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        bounce2: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "scale(1.1)" },
        },
        bounce3: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        bounce4: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        bounce5: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "scale(1.1)" },
        },
        bounce6: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },




        
      },
    },
  },
  plugins: [],
}



