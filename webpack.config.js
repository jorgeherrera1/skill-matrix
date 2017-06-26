const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    lib: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-logger'
    ],
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'lib'
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
      test: /\.js$/,
      filename: 'app.[hash].js.map',
      exclude: 'lib'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

module.exports = config;
