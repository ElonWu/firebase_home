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
          loader: 'babel-loader',
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
