module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
    
      colors: {
        "jux-blue": "#44509c",
        "jux-pink": "#FDDBFF",
        "jux-white": "#FFF",
        "jux-yellow":"#F6E049"
      }
    },

    fontFamily: {
      'Nunito-sans': ["'Nunito Sans', sans - serif"],
      'Nunito': ["'Nunito', sans - serif"]
    },

    container:{
      center: true,
      padding: "1rem",
      screens: {
        lg: "max:1124px",
        xl: "max:1124px",
        "2xl": "1124px",
      },

    }

  },
  plugins: [],
}
