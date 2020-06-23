const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [resolve(__dirname, 'src/index.js')],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React-Redux Boilerplate",
      template: resolve(__dirname, 'src/static/index.html'),
    }),
  ]
}