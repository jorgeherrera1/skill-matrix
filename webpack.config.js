const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'source-map',
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: ['./index.html', './app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].[ext]',
          'extract-loader',
          'html-loader?minimize=true'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        loader: 'file-loader?name=./fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

module.exports = config;