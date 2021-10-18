const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const { dbHandler, rewriterHandler } = require('./handlers');
// 获取db数据
const db = dbHandler('./api');
server.use((req, res, next) => {
    if (req.url.includes('?')) {
        req.url = req.url.split('?')[0];
    }
    if (req.method === 'POST') {
        req.method = 'GET';
    }
    next();
});
server.use(middlewares);
server.use(jsonServer.rewriter(rewriterHandler(db)));
// Use router
server.use(jsonServer.router(db));
server.use(jsonServer.bodyParser);

server.listen(9000, () => {
    console.log('JSON Server is running');
});
