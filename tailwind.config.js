module.exports = {
  purge: {
    enabled: true,
    content: ['.src/pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {

    colors: {
      transparent: 'transparent',
      themePink: '#FF3C69',
      themeBlack: '#141415',
      white: '#FFFFFF',
      gray: {
        lighter: '#9A9A9B',
        light: '#ECECEC',
        dark: '#1D1E1F',
        bgGray: '#EDEEF0'
      },
      lightGreenishBlue: '#DBE9E9',
      greenishBlue: '#01A38F',
      lightBlue: '#E6EBF8',
      Blue: '#2761E1',
      lightGolden: '#2A2519',
      golden: '#D8D20D',
      goldenGray: '#363636',
      lightPink: '#ffecf1'

    },
    extend: {
      animation: {
        slide: 'slide 10s linear infinite',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://res.cloudinary.com/cardclan-io/image/upload/v1616067687/ezgif.com-gif-maker_lv8uxk.png')",
      }),
      keyframes: {
        slide: {
          '0%': { left: "100%" },
          '100%': { left: '-100%' },
        },
      }
    },

  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}
