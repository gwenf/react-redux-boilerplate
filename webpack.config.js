var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].sass');
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  devtool: 'inline-source-maps',
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    extractSASS,
    extractCSS,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'src')
    },

    {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader?sourceMap"]
    },

    {
      test: /\.scss$|\.sass$/,
      loader: extractCSS.extract(['css-loader?sourceMap','sass-loader?sourceMap'])
    },

    { test: /\.png|jpg$/, loader: 'url-loader?name=images/[name].[ext]' },
    { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader?name=fonts/[name].[ext]' }]
  }
};
