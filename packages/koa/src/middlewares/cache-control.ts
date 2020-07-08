import cacheControl from 'koa-cache-control'

export default cacheControl({
  maxAge: 60,
})
