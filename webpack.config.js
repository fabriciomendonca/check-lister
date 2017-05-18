const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  scss: path.join(__dirname, '/src/assets/scss'),
  fonts: path.join(__dirname, '/src/assets/fonts'),
  test: path.join(__dirname, '/test')
};

const config = {
  entry: [
    'babel-polyfill',
    path.join(PATHS.src, '/index.js')
  ],

  output: {
    filename: 'bundle.js',
    path: PATHS.dist,
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: PATHS.src
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: PATHS.scss
      },
      {
        test: /\.(woff2?)$/i,
        use: 'url-loader?limit=10000&name=[name].[ext]&publicPath=/&outputPath=assets/fonts/',
        include: PATHS.fonts
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