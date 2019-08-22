const path = require('path');
const nodeSass = require('node-sass');
const dotenv = require('dotenv').config({ path: `${__dirname}/config/dev.env` });
const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: nodeSass
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, './dist')],
    compress: true,
    port: process.env.PORT,
    hot: true
  },
  plugins: [
    new DefinePlugin({
      'process.env': dotenv.parsed
    })
  ]
});
