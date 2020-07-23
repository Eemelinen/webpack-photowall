const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // split css to separate build file.
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin() // Needed for .js minifier to work after optimization of css.
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}), // split css to separate build file.
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.less$/i, // split css to separate build file.
        use: [
          MiniCssExtractPlugin.loader, // 3. Extracts css to files
          "css-loader", // 2. Css to commonJS
          'less-loader' // 1. Less to CSS conversion
        ],
      }
    ]
  }
})