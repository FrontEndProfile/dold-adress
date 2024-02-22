/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        "4xl": '2px 4px 9px 0px rgba(0, 0, 0, 0.25)',
        "5xl": '2px 4px 9px 0px rgba(26, 29, 32, 0.15)',
        "6xl": '2px 4px 9px 0px rgba(0, 0, 0, 0.05)',

      },
      colors: {
        "black-1000": "#1A1D20",
        "black-1100": '#17191C',
        "gray-1000": '#A7A7A7',
        "orange-1000": '#FD4F50',
        "orange-1100": '#F44',
        "black-1200": '#50555B',
        "gray-1100": '#FAFAFA',
        "gray-1200": '#6B7177',
        "orange-1200": '#FC797A',
        "black-1300": '#383838',
        "blue-1000": '#10007A',
        "light-black": 'rgba(0, 0, 0, 0.06)',
        "blue-1100": '#472BFD',
        "gray-1300": '#F8F9FA',
        "gray-1400": 'rgba(138, 138, 138, 0.30)',
        "gray-1500": '#8A8A8A',
        "orange-1300": '#FF6666',
        "gray-1600": '#CBCBCB',
        "gray-1700": '#949494',
        "red-1000": '#FFD0D0',
        "gray-1800": '#434B53',
        "gray-1900": '#EEE',
        "black-1400": '#0B0B0B',
        "gray-2000": '#989898',
        "green-1000": '#00B67A',
        "gray-2100": '#D9D9D9',
        "gray-2200": '#818181',
        "gray-2300": '#404040',
        "green-1100": '#71EC94',
      },
      backgroundImage: {
        'bg-layer': "linear-gradient(180deg, #F8F9FA 0%, rgba(248, 249, 250, 0.00) 100%)",
      },
      fontFamily: {
        urbanist: `"Urbanist", sans-serif`,
        acid_groteskmedium: "acid_groteskmedium",
      },
      dropShadow: {
        '7xl': '2px 4px 9px rgba(0, 0, 0, 0.40)',
        '8xl': '0px 0px 10px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'xxs': '320px',
        // => @media (min-width: 320px) { ... }

        'xs': '390px',
        // => @media (min-width: 390px) { ... }

        'sm': '576px',
        // => @media (min-width: 575px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 992px) { ... } 

        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1366px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '1600px',
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}