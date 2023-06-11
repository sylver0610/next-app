/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'super-20%': '#ffa40233',
        'lilac': 'rgb(136, 84, 192)',
        'lilac-light': 'rgb(160 118 204)',
        'lilac-dark': 'rgb(108 66 152)'

      },
      colors: {
        'super-dark': 'rgb(206, 132, 0)',
        'super-light': 'rgb(255, 182, 53)',

      },

    },
  },
  plugins: [],

}
