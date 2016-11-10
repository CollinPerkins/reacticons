const webpack = require('webpack');
const path = require('path');

var config = {
   entry: {
      // app: './ExamplesIonicons3/App.jsx'
      reacticons: './reacticons/reacticonsControl.component.jsx'
    },

   output: {
      path:'./dist',
      filename: '[name].js',
   },
   plugins: [
     new webpack.optimize.UglifyJsPlugin({
       debug: true,
       minimize: true,
       sourceMap: false,
       output: {
         comments: false
       },
       compressor: {
         warnings: false
       }
     })
   ],
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
