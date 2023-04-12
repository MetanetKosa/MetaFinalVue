const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Component name "컴포넌트명" should always be multi-word  vue/multi-word-component-names 에러 수정
  lintOnSave : false
})