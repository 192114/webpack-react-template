const precss = require('precss') // 使用类scss语法 其中包含postcss-preset-env 可以使用stage2 及以后的语法
const stylelint = require('stylelint') // css代码校验

module.exports = {
  plugins: [
    stylelint({ fix: true }),
    precss(),
  ],
}
