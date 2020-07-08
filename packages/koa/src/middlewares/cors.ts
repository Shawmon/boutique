import koaCors from '@koa/cors'

export default koaCors({
  origin: '*.tongdouzi.com',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  exposeHeaders: [],
  allowHeaders: [],
  maxAge: 1800,
  credentials: false,
})
