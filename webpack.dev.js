const common = require('./webpack.common');
const  { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.less$/, // Change this to file format you need
        use: [
          "style-loader", // 3. Loader injects style to DOM.
          "css-loader", // 2. CSS loader turns css to commonJS. 
          "less-loader"], //1. Remember Stylus or sass loader if needed. Turns less to css
      },
    ]
  }
});