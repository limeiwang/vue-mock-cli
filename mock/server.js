const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const {dbHandler, rewriterHandler} = require('./handlers')
server.use(middlewares)
// 获取db数据
const db = dbHandler('./data')

server.use(jsonServer.rewriter(rewriterHandler(db)))
// Use router
server.use(jsonServer.router(db))

server.listen(9090, () => {
  console.log('JSON Server is running')
})
