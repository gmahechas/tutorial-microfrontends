const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const prodConfig = {
  mode: 'production',
  entry: './src/index.tsx',
  // devtool: '',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/jumm/latest/'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
  }
};

module.exports = merge(commonConfig, prodConfig);