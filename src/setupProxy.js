const { createProxyMiddleware } = require('http-proxy-middleware');
let base_url = 'https://api-discutions.herokuapp.com'
module.exports = function(app) {
  app.use(
    '/clients',
    createProxyMiddleware({
      target: base_url,
      changeOrigin: true,
    })
  ),
  app.use(
    '/auth',
    createProxyMiddleware({
      target: base_url,
      changeOrigin: true,
    })
  ),
 app.use(
    '/users',
    createProxyMiddleware({
      target: base_url,
      changeOrigin: true,
    })
  ),
 app.use(
  '/discutions',
  createProxyMiddleware({
    target: base_url,
    changeOrigin: true,
  })
)
,
 app.use(
    '/uploads',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  )
}