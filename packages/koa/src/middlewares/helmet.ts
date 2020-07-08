import helmet from 'koa-helmet'
import compose from 'koa-compose'

export default compose([
  // helmet.contentSecurityPolicy({
  //   directives: {
  //     defaultSrc: ['\'self\''],
  //     formAction: ['\'self\''],
  //     upgradeInsecureRequests: true,
  //     blockAllMixedContent: true,
  //   },
  // }),
  helmet.hsts({
    maxAge: 5184000,
    includeSubDomains: true,
    preload: true,
  }),
  helmet.noSniff(),
  helmet.xssFilter(),
  helmet.frameguard({
    action: 'deny',
  }),
  helmet.referrerPolicy({
    policy: 'no-referrer',
  }),
  helmet.hidePoweredBy(),
  helmet.dnsPrefetchControl({ allow: true }),
  helmet.permittedCrossDomainPolicies(),
])
