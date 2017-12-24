const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = ([new HtmlWebpackPlugin({
  template: './webpack/templates/index.html',
})]);


module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=10240&name=[name].[hash:8].[ext]',
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: [ '.web.js', '.js' ],
    alias: {
      'react-native': 'react-native-web',
    },
  },
};