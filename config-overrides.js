//从 customize-cra 引入一些相关的方法

const {
  override,
  addLessLoader,
} = require('customize-cra')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
)