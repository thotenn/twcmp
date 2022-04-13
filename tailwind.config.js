module.exports = {
    //purge: ['./src/**/*.{js,jsx,ts,tsx}', './dist/build/index.html'],
    purge: {
      enabled: true,
      content: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        iflower: ['Indie Flower', 'Open Sans']
      },
      rotate: {
        '-180': '-180deg',
          '-90': '-90deg',
         '-45': '-45deg',
          '0': '0',
          '45': '45deg',
          '90': '90deg',
         '135': '135deg',
          '180': '180deg',
         '270': '270deg',
         '405': '405deg'
      },
      extend: {
      },
    },
    variants: {
      extend: {
      },
    },
    plugins: [],
  }