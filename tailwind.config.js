/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        pastelPurple: '#d6a4c0',
        pastelPink: '#f6c1c1',
        pastelBlue: '#a2c2e3',
        pastelGreen: '#b4e0b3',
        pastelYellow: '#f9f2b6',
        aboutBackground: '#f0f4f8', // Light background color
        aboutText: '#000000', // Black text color
        aboutAccent: '#d6a4c0', // Accent color for the heading
      },
      fontFamily: {
        cuteSans: ['"Comic Sans MS"', 'cursive'],
        pastelSerif: ['"Dancing Script"', 'cursive'],
        kawaii: ['"Indie Flower"', 'cursive'],
        sweetScript: ['"Pacifico"', 'cursive'],
        playful: ['"Chewy"', 'cursive'],
      },
      keyframes: {
        'bg-floating': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bg-floating': 'bg-floating 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
