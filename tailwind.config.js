/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'border': 'hsl(var(--border))',
        'card': 'hsl(var(--card))',
        'muted': 'hsl(var(--muted))',
        'text-muted': 'hsl(var(--text-muted))',
        'accent': 'hsl(var(--accent))',
      },
      backgroundImage: {
        'gradient-header': 'var(--header-gradient)',
        'gradient-nordic': 'var(--gradient-nordic)',
      }
    },
  },
  plugins: [],
}