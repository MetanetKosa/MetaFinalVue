const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // Component name "컴포넌트명" should always be multi-word  vue/multi-word-component-names 에러 수정
  lintOnSave : false
})

// // 이미지 loader
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
//       .use('url-loader')
//       .loader('url-loader')
//       .options({
//         limit: 10000
//       })
//       .end()
//   }
// }