const path = require('path');
const resolve = dir => path.join(__dirname, './', dir);
const HTmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: resolve('index.js'),
  output: {
    filename: 'index.js',
    path: resolve('dist')
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new HTmlWebpackPlugin({
      template: resolve('index.html')
    }),
    new webpack.BannerPlugin('created 2019/04/30 by zhaoyiming')
  ],
  devServer: {
    port: 5000,
    open: true,
    inline: false
  }
};