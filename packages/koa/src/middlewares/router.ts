// import path from 'path'
// import koaRouter from 'koa-router'
// import compose from 'koa-compose'
// import handleH5Request from 'boutique-h5'

// const router = koaRouter({
//   prefix: '/public',
// });

// router.get('/(.*)', handleH5Request);

// export default compose([
//   router.routes(),
//   router.allowedMethods(),
// ]);

/*
router.get('/login', async (ctx, next) => {
  ctx.body =
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
      </head>
      <body>
        <form action="/api/login" method="post" enctype="multipart/form-data">
          <input type="text" name="name" />
          <input type="password" name="pwd" />
          <input type="file" name="avatar" />
          <input type="submit" />
        </form>
      </body>
    </html>
  `;
  await next();
});

router.post('/index', async (ctx, next) => {
  ctx.body = `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
      </head>
      <body>
        <h3>Welcome, ${ctx.request.body.name}!</h3>
      </body>
    </html>
  `;
  await next();
});
*/

export default {}
