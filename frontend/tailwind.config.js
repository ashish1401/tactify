/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#112852",
          secondary: "rgb(59, 130, 246)",
          tertiary: "white"
        },
        fontFamily: {
          "pop": ['Poppins', 'sans-serif'],
          "sora": ["Sora", "sans-serif"],
          "exo": ['Exo', 'sans-serif']
        }

      },
    },
  },
  plugins: [],
}

