const webpack = require('webpack');
const path = require('path');

var config = {
   entry: {
      reacticons: './reacticons/reacticons.control.jsx'
    },

   output: {
      path:'./dist',
      filename: '[name].js',
   },
  //  plugins: [
  //    new webpack.optimize.UglifyJsPlugin({
  //      debug: true,
  //      minimize: true,
  //      sourceMap: false,
  //      output: {
  //        comments: false
  //      },
  //      compressor: {
  //        warnings: false
  //      }
  //    })
  //  ],
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
         }
      ]
   }
}



module.exports = config;
