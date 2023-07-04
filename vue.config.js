const { defineConfig } = require('@vue/cli-service')

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = defineConfig({
  publicPath: '/',
  assetsDir: 'static',
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
      vue: 'Vue',
      // 属性名称 element-ui, 表示遇到 import xxx from 'element-ui' 这类引入 'element-ui'的，
      // 不去 node_modules 中找，而是去找 全局变量 ELEMENT
      'element-ui': 'ELEMENT' // 需要纯大写
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '这里是小五的博客！'
      return args
    })

    // 开启Gzip
    if (process.env.ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8 // 压缩比
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
})
