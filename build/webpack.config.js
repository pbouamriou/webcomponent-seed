"use strict";

let path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(path.resolve(__dirname, "../dist/"));

module.exports = {
  entry: {
    webcomponents: [path.resolve(
      __dirname, "../node_modules/webcomponents.js/webcomponents.js")],
    styles: [path.resolve(
      __dirname, "../styles.js")],
    testcomponent: [path.resolve(
      __dirname, "../src/components/test-component/test-component"),
      "webpack-dev-server/client?http://localhost:8080/"]
  },
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "[name].js",
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
        test: /\.scss$/, loader: ExtractTextPlugin.extract(['css', 'sass'])
        //loaders: ["style-loader", "css-loader", "sass-loader"]
        //loader: "style!css?sourceMap!sass?sourceMap"
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
