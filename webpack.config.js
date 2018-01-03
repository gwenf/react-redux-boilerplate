var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSASS = new ExtractTextPlugin('[name].sass');
var extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  devtool: 'inline-source-maps',
  entry: [
    'react-hot-loader/patch',
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
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      '$': 'jquery',
      'jquery': 'jquery'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },

    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    },

    {
      test: /\.scss$|\.sass$/,
      exclude: [/node_modules/],
      loader: extractCSS.extract(['css-loader?sourceMap','sass-loader?sourceMap'])
    },

    { test: /\.png|jpg$/, loader: 'url-loader?name=images/[name].[ext]' },
    { test: /\.(svg|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'url-loader?name=fonts/[name].[ext]' }]
  }
};
