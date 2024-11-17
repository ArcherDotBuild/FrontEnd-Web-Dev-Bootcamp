// Importing something with NodeJS syntax
const path = require('path')

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
}
