const path = require('path')

module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        '@components': path.join(__dirname, './src/components'),
        '@utils': path.join(__dirname, './src/utils'),
        'finbox': path.join(__dirname, './components/finbox/src'),
      }
    }
  },

  devServer: {
    open: true,
    host: "localhost",
    port: "8080",
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:9000",
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  }
};
