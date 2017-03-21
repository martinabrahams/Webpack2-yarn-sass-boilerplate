const webpackMerge = require('webpack-merge');
const webpackConfigBase = require('./webpack.config.base.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = {
  'static': path.resolve(__dirname, '../src/')
};

module.exports = function() {
  return webpackMerge(webpackConfigBase(), {
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            'style-loader',
            'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: 'inline',
                  plugins: function () {
                    return [
                      require('postcss-import'),
                      require('postcss-cssnext'),
                    ];
                  }
                }
              },
              'sass-loader'
            ]

        }
      ]
    },
    devServer: {
      contentBase: paths.static,
      port: 8080,
      watchOptions: {
        poll: 1000
      }
    },
    plugins: [
      // Generates an `index.html` file with the <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.static +  '/index.html',
      }),
      // This is necessary to emit hot updates (currently CSS only):
      // new webpack.HotModuleReplacementPlugin()
    ]
  })
};
