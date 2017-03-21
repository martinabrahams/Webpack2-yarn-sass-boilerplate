const webpack= require('webpack');
const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = {
  'static': path.resolve(__dirname, '../src/static'),
  'dist': path.resolve(__dirname, '../dist')
};

module.exports = function() {
  return webpackMerge(webpackConfigBase(), {
    output: {
      publicPath: './'
    },
    externals: {
      // example :
      // react: 'react',
      // 'react-dom': 'reactDOM'
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?localIdentName=[hash:base64:10]',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: function () {
                    return [
                      require('postcss-import'),
                      require('postcss-cssnext'),
                      require('cssnano')({
                        autoprefixer: false,
                        safe: true
                      })
                    ];
                  }
                }
              },
              'sass-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
           NODE_ENV: JSON.stringify("production")
         }
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new ExtractTextPlugin('[chunkhash].bundle.css'),
      new CopyWebpackPlugin([
      {
        context: paths.static,
        to: '../',
        from: '**/**'
      }
      ])
    ]
  })
};
