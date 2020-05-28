const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = function (env, argv) {

  const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
  const isEnvProduction = argv.mode === 'production';
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin()
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: "./public/index.html",
        favicon: './public/favicon.ico',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
        options: {
          outputPath: 'css/'
        }

      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
        { test: /\.less$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] },
        { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
        { test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/], loader: "url-loader", options: { limit: 10000 } },
      ]

    },

  };
  
}
