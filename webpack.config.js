const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

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
    }),
    new TerserWebpackPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new StylelintPlugin(),
  ],
  entry: './js/main.js',
  mode: 'development',
  output: {
    filename: 'js/main.js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'less-loader',
          'sass-loader',
          'style-loader',
          'css-loader',
        ],
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'eslint-loader',
      },
    ],
  },
};
