const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map', // Track the error line in file
  devServer: {
    contentBase: './dist', // Indicate to the server where are the files to get the content
  },
  plugins: [
    new HtmlWebpackPlugin({ // Auto-Generates the index.html
      title: 'Development',
    })
  ],
  output: {
    filename: '[name].bundle.js', // Identify different entry points
    path: path.resolve(__dirname, 'dist'), // Idicate where the transpiled files are
    clean: true, // Clean the dist folder
    publicPath: '/'
      // webpack-dev-middleware: make sure files are served correctly on localhost:3000
  }
};