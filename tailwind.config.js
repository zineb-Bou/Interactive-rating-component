module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        352: '22rem',
      },
    },
    screens: {
      phone: { max: '450px' },
    },
    colors: {
      Orange: 'hsl(25, 97%, 53%)',
      White: 'hsl(0, 0%, 100%)',
      LightGrey: 'hsl(217, 12%, 63%)',
      MediumGrey: 'hsl(216, 12%, 54%)',
      DarkBlue: 'hsl(213, 19%, 18%)',
      VeryDarkBlue: 'hsl(216, 12%, 8%)',
      DarkGreyBlue: '#1F2630',
    },
  },
  plugins: [],
};
