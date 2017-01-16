"use strict";

var webpack = require('webpack');
let path = require("path");

let PROD = JSON.parse(process.env.PROD_ENV || '0');

console.log(path.resolve(__dirname, "../dist/"));

module.exports = {
  entry: {
    app: PROD ? [
      path.resolve(__dirname, "../app.ts")
    ] :
    [
      path.resolve(__dirname, "../app.ts"),
      "webpack-dev-server/client?http://localhost:8080/"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "app.bundle.js",
    publicPath: "/dist/"
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /component.*\.html/,
        loader: "html-loader"
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ] : []
};
