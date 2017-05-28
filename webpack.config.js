const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  dist: path.join(__dirname, '/dist'),
  src: path.join(__dirname, '/src'),
  scss: path.join(__dirname, '/src/assets/scss'),
  fonts: path.join(__dirname, '/src/assets/fonts'),
  img: path.join(__dirname, '/src/assets/img'),
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
        test: /\.(jpe?g|svg|gif|png)$/,
        use: 'url-loader?limit=25000&name=[name].[ext]&publicPath=/&outputPath=assets/img/',
        include: PATHS.img
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
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),

    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || null)
    })
  ]
};

module.exports = config;