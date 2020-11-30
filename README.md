# webpack-react-template

  ## 1. 安装webapck webpack-cli webpack-dev-server
  ```shell
    npm i webpack webpack-cli webpack-dev-server -D
  ```

  ## 2. 安装 @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader

  ```shell
    npm i @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader -D
  ```
    1. 配置babel (.babelrc文件)

    2. 安装core-js 和 regenerator-runtime（支持generators 和 async functions）

  ## 3. 安装 terser-webpack-plugin mini-css-extract-plugin html-webpack-plugin optimize-css-assets-webpack-plugin cssnano

    1. terser-webpack-plugin 支持压缩es6语法
    2. mini-css-extract-plugin css提取到单独文件
    3. html-webpack-plugin 生成html文件
    4. optimize-css-assets-webpack-plugin css压缩
    5. cssnano 配合optimize-css-assets-webpack-plugin 处理z-index重新计算 和 autoprefixer 清理问题

  ## 4. 安装 image-webpack-loader url-loader 处理图片

  ## 5. eslint 代码检测
    ```shell
      npm i eslint-loader -D
      npm i babel-eslint -D
      npx install-peerdeps --dev eslint-config-airbnb
    ```
    创建.eslintrc.js .eslintignore

  ## 6. postcss 做css处理
    1. postcss postcss-loader
    2. stylelint 检测css代码 (stylelint-config-standard stylelint-scss)
    3. precss 囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等

  ## 一些loader
     
    1. css-loader 处理css文件中的@import url() 的路径
    2. url-loader 把文件转成base64
    3. image-webpack-loader 处理图片压缩
    4. babel-loader  babel 转码
    5. style-loader  将css添加到<style></style>中
