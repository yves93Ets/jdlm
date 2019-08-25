"use strict";

const merge = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.config.base.js");
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
  },
  devtool: "inline-source-map",
  plugins: [new WebpackNotifierPlugin(), new HtmlWebpackPlugin({ template: "./public/index.html" })]
});
