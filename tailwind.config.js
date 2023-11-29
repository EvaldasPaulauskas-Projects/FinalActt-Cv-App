/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'icon': "url('/public/imgs/icon-white.png')",
        'vs-code': "url('/public/imgs/bg-vscode.png')",
        'homeGif': "url('/public/imgs/homeVid.gif')",

        'c': "url('/public/icons/c-.png')",
        'c-sharp': "url('/public/icons/c-sharp.png')",
        'python': "url('/public/icons/python.png')",
        'css-3': "url('/public/icons/css-3.png')",
        'html-5': "url('/public/icons/html-5.png')",
        'js': "url('/public/icons/js.png')",
        'react': "url('/public/icons/react.png')",
        'mongodb': "url('/public/icons/mongodb.png')",
        'sql': "url('/public/icons/sql.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

