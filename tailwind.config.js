/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'group-hover:text-orange-500',
    'group-hover:text-blue-500',
    'group-hover:text-yellow-500',
    'group-hover:text-green-500',
    'group-hover:text-white',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}