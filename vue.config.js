const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
   devServer: {
    proxy: {
      '/auth' :{
        target: "http://localhost:8082",
        changeOrigin: true,
        logLevel: 'debug',
      },
      '/product': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        logLevel: 'debug',
        },
        '/upload': {
          target: 'http://localhost:8082',
          changeOrigin: true,
          logLevel: 'debug',
          },
          '/admin': {
          target: 'http://localhost:8082',
          changeOrigin: true,
          logLevel: 'debug',
          }
          ,'/mypage': {
            target: 'http://localhost:8082',
            changeOrigin: true,
            logLevel: 'debug',
          }
    }
  }
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