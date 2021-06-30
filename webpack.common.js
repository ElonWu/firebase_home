const webpack = require('webpack');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const nodeExternals = require('webpack-node-externals');

// 用于 pwa
// const WorkboxPlugin = require('workbox-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

const {
  title,
  description,
  keywords,
  shareOptions = [],
  favicon,
  externals,
  defines = {},
  alias = {},
  devServer = {},
  pwa = false,
} = require('./defaultSettings.js');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/', // 否则 browser-router 子路由会定位错误
    filename: '[name]_[contenthash].js',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.ejs'),
      title, // 页面标题
      description, // 描述、关键字
      keywords, // 描述、关键字
      shareOptions,
      favicon: path.resolve(__dirname, './public', favicon), // logo
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
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //   },
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
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //   },
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

      {
        test: /\.(png|jpe?g|gif|svg|tff|wav|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.css',
      '.png',
      '.jpg',
      '.svg',
      '.wav',
      '.mp3',
    ],
    alias: {
      '@': path.resolve(__dirname, './src'),
      ...alias,
    },
  },

  target: 'web',

  stats: 'minimal',

  // 提升打包效率
  optimization: {
    moduleIds: 'deterministic',
    // webpack 连接模块所需的 加载和解析逻辑, 单独分离到一个文件
    runtimeChunk: 'single',
    // 将第三方库单独打包
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },

    moduleIds: 'named',
    chunkIds: 'named',
  },

  cache: {
    type: 'filesystem',
    version: '1.0',
    buildDependencies: {
      config: [__filename],
    },
  },
};
