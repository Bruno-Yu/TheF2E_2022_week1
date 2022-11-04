module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {

    extend: {
      colors: {
        Brown: '#38241B',
        Red: '#951205',
        bg: '#D6D6D6',
      },
      fontFamily: {
          'sans': ['"AR JULIAN"' ,'"Noto Sans TC"','ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', "'Segoe UI Emoji'", "'Segoe UI Symbol'", '"Noto Color Emoji"' ,'sans-serif'],
          'serif': ['"Noto Serif TC"',"ui-serif", "Georgia, Cambria", "'Times New Roman'", "Times", "serif"], 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}