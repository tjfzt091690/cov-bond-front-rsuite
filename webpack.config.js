const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const extractLess = new ExtractTextPlugin('style.[hash].css');
const rsuiteStylePath = path.resolve(__dirname, './node_modules/rsuite/styles');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000
  },
  entry: {
    polyfills: './src/polyfills.js',
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js?[hash]',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader?babelrc'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(less|css)$/,
        loader: extractLess.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)($|\?)/,
        include: [rsuiteStylePath],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              size: 16,
              hash: 'sha512',
              digest: 'hex',
              name: 'resources/[hash].[ext]',
              publicPath: '/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractLess,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|en-gb/),
    new webpack.NamedModulesPlugin(),
    new HtmlwebpackPlugin({
      title: 'RSUITE | A suite of React components',
      chunks: ['polyfills', 'commons', 'app'],
      template: 'src/index.html',
      inject: true
    })
  ]
};
