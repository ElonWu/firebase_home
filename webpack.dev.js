const webpack = require('webpack');
const path = require('path');

const {
  HotModuleReplacementPlugin,
  DefinePlugin,
  ProgressPlugin,
  DllReferencePlugin,
} = webpack;

const { devServer = {} } = require('./defaultSettings.js');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = () => {
  const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true, // 监听文件更新，刷新页面

      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },

      // 同时设定才能通过本机 ip 打开
      host: '0.0.0.0', // 不设置会拒绝访问
      useLocalIp: true,
      port: 9000,

      compress: true,
      open: true,
      hot: true,

      watchOptions: {
        // 重新出发打包的延迟
        aggregateTimeout: 10,
        // 忽略文件
        ignored: ['**/node_modules'],
        // true 为启用 watch, 设置 1000（获取他数字）表示每 xx 毫秒轮询检查文件更新
        poll: true,
      },

      // inline: true,
      // hotOnly: true,

      // 浏览器刷新时，子路径也会默认指向打包的路径
      historyApiFallback: true,

      overlay: {
        warnings: true, // 打包时的错误信息， 会在页面强提醒
        errors: true, // 打包时的警告信息，会在页面强提醒
      },

      ...devServer,
    },

    plugins: [
      // 设定关联时不是通过数字， 而是路径转换的hash值来标记模块；
      //  已经通过 optimization.moduleIds = 'deterministic' 配置此效果，
      // new HashedModuleIdsPlugin(),
      new ProgressPlugin(),

      new HotModuleReplacementPlugin(),

      new DllReferencePlugin({
        context: __dirname,
        manifest: require('./cache/mainfest.json'),
        scope: 'elonwu',
        sourceType: 'commonjs2',
      }),

      new DefinePlugin({
        NODE_ENV: JSON.stringify('development'),
        WEBPACK_BUILD_TYPE: JSON.stringify('development'),
      }),
    ],
  };

  return merge(commonConfig, devConfig);
};
