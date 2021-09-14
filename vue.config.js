module.exports = {
  devServer: {
    open: true,
    host: "localhost",
    port: "8081",
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:9090",
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
