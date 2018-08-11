const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin({ filename: "build.css" });

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { 
              presets: ["env", "react"],
              plugins: [
                require('babel-plugin-transform-object-rest-spread')
              ]
            }
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: extractLESS.extract([
          { loader: "css-loader",  options: { sourceMap: true, localIdentName: "[local]_[hash:base64:5]" } }, 
          { loader: "less-loader", options: { sourceMap: true } }
        ])
      },
      {
        test: /\.(jpg|png)$/,
        loader: "url-loader?mimetype=image/png"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  plugins: [
    extractLESS,
    new ExtractTextPlugin("styles.less")
  ],
  watch: true
}