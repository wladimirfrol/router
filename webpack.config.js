const path = require('path');

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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}