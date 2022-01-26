const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve('dev', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('dev', 'views', 'temp.html')
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: path.resolve(__dirname, 'node_modules'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }]
    }]
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}