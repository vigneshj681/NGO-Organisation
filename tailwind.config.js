/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ngo-blue': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          600: '#2563eb',
          800: '#1e40af',
          900: '#1E3A8A',
          950: '#0f172a',
        },
        'ngo-green': {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16A34A',
          700: '#15803d',
        },
        'ngo-gray': {
          50: '#F5F7FA',
          100: '#e5e7eb',
          200: '#e2e8f0',
          700: '#334155',
          800: '#1e293b',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
