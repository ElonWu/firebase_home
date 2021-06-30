const webpack = require('webpack');
const path = require('path');

const { DefinePlugin } = webpack;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { externals } = require('./defaultSettings.js');

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env, argv) => {
  const prodConfig = {
    mode: 'production',
    externalsType: 'script',

    // 全部第三方包使用 CDN
    // target: ['web', 'es5'],
    // externals: [nodeExternals()],

    // 指定 externals
    externals,

    plugins: [
      // 服务器打包时报错
      //   new BundleAnalyzerPlugin({
      //     analyzerPort: 9001, // 监听端口
      //     defaultSizes: 'gzip', // 默认查看的 tab
      //     openAnalyzer: false, // 自动打开
      //   }),

      //   new WorkboxPlugin.GenerateSW({
      //     clientsClaim: true,
      //     skipWaiting: true,
      //   }),

      // css 文件单独拆分出来, Tip: 引入 antd 样式时必须使用，引入第三方样式出错时， 记得挪到 common
      new MiniCssExtractPlugin({ filename: 'main.[contenthash].css' }),

      new DefinePlugin({
        NODE_ENV: JSON.stringify('production'),
        WEBPACK_BUILD_TYPE: JSON.stringify(env.buildType),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [path.resolve(__dirname, 'src')],
          use: [
            {
              loader: 'thread-loader',
              options: {
                // 产生的 worker 的数量，默认是 cpu 的核心数
                workers: 8,

                // 一个 worker 进程中并行执行工作的数量
                // 默认为 20
                workerParallelJobs: 50,

                // 闲置时定时删除 worker 进程
                // 默认为 500ms
                // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
                poolTimeout: 2000,

                // 池(pool)分配给 worker 的工作数量
                // 默认为 200
                // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
                poolParallelJobs: 50,

                // 池(pool)的名称
                // 可以修改名称来创建其余选项都一样的池(pool)
                name: 'parser-pool',
              },
            },
            'babel-loader',
          ],
        },

        {
          test: /.less$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules', 'antd', 'lib'),
            path.resolve(__dirname, 'node_modules', 'rc-trigger'),
          ],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
                sourceMap: true,
              },
            },
          ],
        },

        {
          test: /.(sa|sc|c)ss$/,
          include: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules', 'antd', 'lib'),
          ],
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',

              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',

              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
  };

  return merge(commonConfig, prodConfig);
};
