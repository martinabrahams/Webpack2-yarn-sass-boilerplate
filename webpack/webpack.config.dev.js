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
          test: /\.scss$/,
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
    // Dev server config
    devServer: {
      contentBase: paths.static,
      port: 8080,
      watchOptions: {
        poll: 1000
      }
    },
    devtool: "source-map", // Default development sourcemap
    plugins: [
      // Generates an `index.html` file with <script> injected.
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.static +  '/index.html',
      })
    ]
  })
};
