const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, "../../" + "main/resources/static"),
  devServer: {
      proxy: {
        '/api':{
          target:'http://localhost:9000/', //개발api 서버포트
          changeOrigin: true,
          ws: true,
        }
      }
  }
}