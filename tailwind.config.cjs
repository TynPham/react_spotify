/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "green-rgba-ln":
          "linear-gradient(180deg, rgba(72, 144, 120, 0.4), #121212)",
      },
      colors: {
        "green-rgba": "rgba(72, 144, 120, 0.3)",
        "bar-hover": "hsla(0,0%,100%,0.1);",
      },
      backgroundPosition: {
        zero: "0 0",
      },
      animation: {
        like: "like 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
