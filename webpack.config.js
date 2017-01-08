const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
}