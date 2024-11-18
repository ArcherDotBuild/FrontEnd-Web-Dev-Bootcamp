// Importing something with NodeJS syntax
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    main: './src/index.js',
    // some: './src/somefile.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        // test: /\.css$/i, // Match .css files
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo',
    }),
  ],
  devServer: {
    static: './dist',
  },
  // optimization: {
  //   usedExports: true,
  // },
}
