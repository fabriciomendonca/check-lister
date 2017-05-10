const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  test: path.join(__dirname, '/test')
};

const config = {
  entry: [
    'babel-polyfill',
    path.join(PATHS.src, '/index.js')
  ],

  output: {
    filename: 'bundle.js',
    path: PATHS.dist
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.s?css$/,
        use: 'style-loader!css-loader!sass-loader'
      }
    ]
  },

  devServer: {
    port: 3000,
    publicPath: '/',
    inline: true,
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, '/index.ejs')
    })
  ]
};

module.exports = config;