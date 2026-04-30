/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        pixel: {
          black: "#0D0D0D",
          cyan: "#00F0FF",
          violet: "#7A00FF",
        },
      },
      boxShadow: {
        glow: "0 0 36px rgba(0, 240, 255, 0.22), 0 0 72px rgba(122, 0, 255, 0.18)",
        "glow-strong": "0 0 28px rgba(0, 240, 255, 0.44), 0 0 70px rgba(122, 0, 255, 0.32)",
      },
    },
  },
  plugins: [],
};
