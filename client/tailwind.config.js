module.exports = {
  darkMode: 'class', // This enables the dark mode by adding a class 'dark' to the root
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        spilling: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        spilling: 'spilling 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
