const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const { join } = path

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Teste front-end Hi Platform',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          query: {
            name: 'media/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      components: join(__dirname, 'src', 'components'),
      images: join(__dirname, 'media'),
    },
  },
}
