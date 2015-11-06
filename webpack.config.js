var buildPath = require('path').join(__dirname, 'public');
module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
    inline: true,
    progress: true,

    // parse host and port from env so this is easy
    // to customize
    host: process.env.HOST,
    port: process.env.PORT
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
                // https://github.com/babel/babel-loader#options
                cacheDirectory: true,
                presets: ['react']
        }
      }
    ]
  }
};
