"use strict";

const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

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
  mode: PROD ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "../dist/"),
    filename: "app.bundle.js",
    publicPath: "/dist/"
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',
  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
        options: {
          compilerOptions: {
            experimentalDecorators: true,
            target: "es5"
          }
        }
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
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  }
};
