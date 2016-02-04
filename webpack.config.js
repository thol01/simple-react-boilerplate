const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry:  __dirname + "/src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },

  devServer: {
    contentBase: "./src/public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
};

