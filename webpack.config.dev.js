const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'example', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'example')]
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'example'), path.join(__dirname, 'lib')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
};
