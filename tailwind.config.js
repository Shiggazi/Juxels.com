module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
    
      colors: {
        "jux-blue": "#44509c",
        "jux-pink": "#44509c",
        "jux-white": "#44509c"
      }
    },

    fontFamily: {
      'Nunito-sans': ["'Nunito Sans', sans - serif"],
      'Nunito': ["'Nunito', sans - serif"]
    },

    container:{
      center: true,
      padding: "1rem"
    }

  },
  plugins: [],
}
