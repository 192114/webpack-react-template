// node 内置模块
const path = require('path')
const webpack = require('webpack')
// 生成html模版
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: './src/index.jsx',

  output: {
    filename: 'js/[name].[hash:8].js',
    chunkFilename: 'js/[name].[hash:8].js', // 指定分离出来的代码文件的名称
    path: path.resolve(__dirname, 'dist'),
    publicPath: './', // 解释： https://juejin.im/post/5ae9ae5e518825672f19b094
  },

  devServer: {
    // http://localhost:8080/webpack-dev-server 可以看见资源的路径
    hot: true,
    port: '3000',
    publicPath: '/', // webpack-dev-server打包的内容是放在内存中的，这些打包后的资源对外的的根目录（打包后资源存放的位置）
    historyApiFallback: true, // 任何404响应都会替换成index.html (使用html5 history API时 可以防止刷新后404)
    proxy: {
      '/api': {
        // 将 URL 中带有 /api 的请求代理到本地的 3000 端口的服务上
        target: 'http://10.0.0.110:8123',
        compress: true,
        // pathRewrite: {'^/api': ''}, // 把 URL 中 path 部分的 `api` 移除掉
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[hash:7].[ext]',
              outputPath: 'images',
              publicPath: '../images',
              useRelativePaths: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 优化部分
  optimization: {
    minimize: false,

    // 提取公共模块
    splitChunks: {
      chunks: 'all', // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
      cacheGroups: {
        // js提取
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
        // css 提取
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
          priority: 20, // 权重 越大优先级越高
        },
      },
    },
  },
  // 处理解析
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },

    modules: [
      path.resolve(__dirname, 'node_modules'), // 使用绝对路径指定 node_modules，不做过多查询
    ],

    // 删除不必要的后缀自动补全，少了文件后缀的自动匹配，即减少了文件路径查询的工作
    // 其他文件可以在编码时指定后缀，如 import('./index.scss')
    extensions: ['.js', '.jsx'],

    // 避免新增默认文件，编码时使用详细的文件路径，代码会更容易解读，也有益于提高构建速度 （默认就是index）
    mainFiles: ['index'],
  },
}
