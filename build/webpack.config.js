"use strict";

let path = require("path");

console.log(path.resolve(__dirname, "../dist/"));

module.exports = {
  entry: {
    webcomponents: [path.resolve(
      __dirname, "../node_modules/webcomponents.js/webcomponents.js")],
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
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
        //loader: "style!css?sourceMap!sass?sourceMap"
      }
    ]
  }
};
