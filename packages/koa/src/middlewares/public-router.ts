import KoaRouter from 'koa-router'
import compose from 'koa-compose'
// import handleH5Request from 'boutique-h5'

const router = new KoaRouter({
  prefix: '/public',
});

// router.all('/:path*', handleH5Request);

export default compose([
  router.routes(),
  router.allowedMethods(),
]);