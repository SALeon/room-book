const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  resolveLoader: {
    moduleExtensions: ['*-loader', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash]-[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Room book',
      template: `${__dirname}/src/index.html`,
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        useShortDoctype: true
      }
    })
  ]
};
