const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    // 代理标识
    '/api',
    // 代理配置
    createProxyMiddleware({
      // 目标服务器地址
      target: 'http://toutiao.itheima.net/v1_0/',
      changeOrigin: true,
      pathRewrite: {
		    // 去掉接口中的 /api 前缀
        '^/api': ''
      }
    })
  )
}

// 走代理的过程：
// 1. 页面发请求  /user/profile
// 2. axios来发请求  /api/user/profile
// 3. 浏览器在解析地址  http://localhost:3000/api/user/profile
// 4. 走cra启动的开发服务器，判断请求地址上是否 /api
// 5. 有的话就走代理，就帮我们去请求 http://toutiao.itheima.net/v1_0/api/user/profile
// 6. 通过路径的重写 http://toutiao.itheima.net/v1_0/user/profile
// 7. 响应结果