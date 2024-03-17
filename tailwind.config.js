/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "post-bg": "#9c7eee",
        "post-text": "#593884",
        "author-text": "#543280",
      },
      keyframes: {
        "animate-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "post-animation": "animate-in 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
