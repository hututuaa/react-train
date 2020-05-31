const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: '@/index.js',
  output: {
    // filename: 'index.js',
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/'
  },
  //使用devServer
  devServer: {
    compress: true,//压缩
    port: 3000,//端口号
    open: true,//自动打开浏览器
    hot: true,//热模替换
    contentBase: '../dist'
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  performance: {
 
    hints:false   
     
  },    
  plugins: [
    //使用HtmlWebpackPlugin生成HTML文件
    new HtmlWebpackPlugin({
      title: "Webpack App",// 生成html文件的title
      filename: "index.html",// 生成html文件的文件名
      template: "./public/index.html",// 模板文件
      favicon: './public/favicon.ico',// 图标
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].chunk.css',
        
    }),
  ],
  module: {
    rules: [
      //使用MiniCssExtractPlugin解析样式
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true //开启css模块化
            },
          },
          
          'postcss-loader'
        ]
      },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'] },
      {
        test: [/\.(woff|woff2|eot|ttf|otf)$/],
            use: [{
          loader: 'file-loader',
          options: {
            name:'fonts/[name].[hash:8].[ext]',
            limit: 80000
          }
        } //项目设置打包到dist下的fonts文件夹下
      ]
      },
      //使用url-loader打包图片文件
      // (相比file-loader能将一定数值下的图片转为base64的格式)
      {
        test: /\.(png|jpg|gif|bmp|jpeg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,//小于8KB的图片，转换为base64
              outputPath: 'img',//输出的路径
              publicPath: '../build/img',//资源路径
              name: '[hash:8].[ext]'//图片名称(哈希值前8位)
            }
          }
        ]
      },
      //使用html-withimg-loader打包HTML中的图片（<img>标签）
      { test: /\.(htm|html)$/i, loader: 'html-withimg-loader' },
      //使用eslint-loader做语法检查
      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 eslint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [{
          loader: "eslint-loader"
        }]
      },
      //使用babel-loader将ES6转为ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
}
