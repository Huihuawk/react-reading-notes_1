/**
 * Created by Wangke on 2017/9/19.
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // 生成源代码映射
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 用于热替换功能，先连接服务器，等待接受重新编译代码的通知，代码变动，收到通知进而更新客户端代码
    'webpack-hot-middleware/client',
    // 程序入口文件
    './index.js',
  ],
  output: {
    // 输出的硬盘路径，本例编译代码在内存中，此项暂时无用
    path: path.join(__dirname, 'dist'),
    // 输出的文件名称
    filename: 'bundle.js',
    // 公共路径，所有资源的URL前缀等
    publicPath: '/static',
  },
  // 插件列表
  plugins: [
    // 为经常使用的模块分配最小程度的ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 用于热替换
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    // 加载器列表
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
    ],
  },
};
