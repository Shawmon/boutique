import { createServer as createHttpServer } from 'http'
import { createServer as createHttpsServer } from 'https'

import Koa from 'koa'

import CONFIG from './config'
import corsMiddleware from './middlewares/cors'
import bodyMiddleware from './middlewares/body'
import helmetMiddleware from './middlewares/helmet'
import compressMiddleware from './middlewares/compress'
import cacheControlMiddleware from './middlewares/cache-control'
import publicMiddleware from './middlewares/public-router'
// import publicMiddleware from 'boutique-h5'

const app = new Koa();

app.use(corsMiddleware);
app.use(bodyMiddleware);
app.use(helmetMiddleware);
app.use(compressMiddleware);
app.use(cacheControlMiddleware);
app.use(publicMiddleware)
// app.use(routerMiddleware);

createHttpServer(app.callback())
  .listen(CONFIG.HTTP_PORT, () => console.log(`🚀 Server ready at http://0.0.0.0:${CONFIG.HTTP_PORT}`));
  createHttpsServer({
  key: CONFIG.HTTPS_KEY,
  cert: CONFIG.HTTPS_CERT,
}, app.callback())
  .listen(CONFIG.HTTPS_PORT, () => console.log(`🚀 Server ready at https://0.0.0.0:${CONFIG.HTTPS_PORT}`));
