var webpack = require('webpack')
var path = require("path")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var extractCSS = new ExtractTextPlugin('[hash:8].style.css', { allChunks: true });

module.exports = {
  entry: process.env.NODE_ENV === 'production' ? {
    vendor: ['antd','react','react-router'],
    bundle: './client/index.js'
  } : './client/index.js',

  output: {
    path: 'public',
    filename: process.env.NODE_ENV === 'production' ? '[hash:8].[name].js' : 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({  
      __DEBUG__: false,
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('[hash:8].style.css', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: "react-express-webpack",
      template: path.join(__dirname,'../client/index.prod.html'),
      inject:'body',
      hash:false,    //为静态资源生成hash值
      minify:{    //压缩HTML文件
        removeComments:false,    //移除HTML中的注释
        collapseWhitespace:false    //删除空白符与换行符
      }
    })
  ] : [
    new webpack.DefinePlugin({  
        __DEBUG__: true
    }),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  },

  babel: {
    "plugins": [["antd"]]
  }
}
