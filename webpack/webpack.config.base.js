const path = require('path');
const paths = {
  'assets': path.resolve(__dirname, '../dist/assets'),
  'src': path.resolve(__dirname, '../src')
};

module.exports = function() {
  return {
    context: paths.src,

    // from angularjs
    resolve: {
      extensions: [
        ".ts",
        ".js"
      ],
      modules: [
        "./node_modules"
      ]
    },
    resolveLoader: {
      modules: [
        "./node_modules"
      ]
    },

    entry: {
      app: ['./app/app.ts']
    },
    output: {
      filename: '[chunkhash].bundle.js',
      path: paths.assets
    },
    module: {
      rules: [
        // TypeScript loader
        { 
          test: /\.tsx?$/, 
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.(png|jpg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'images/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|otf|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(mp4|ogg|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    }
  };
};
