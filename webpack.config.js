const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new CopyPlugin({
      patterns: [
        {from: 'img', to: 'img'},
        {from: '*.html', to: ''},
      ]
    })
  ],
  entry: "./js/main.js",
  output: {
    filename: "js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
