/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita el modo oscuro con la estrategia de clase
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de que Tailwind procese estos archivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
