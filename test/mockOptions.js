const uuid = require('uuid')

const url = () => `https://${uuid.v4()}.com`

module.exports = {
  aad: {
    authHost: uuid.v4(),
    tenantName: uuid.v4()
  },
  dynamics: {
    clientId: uuid.v4(),
    clientSecret: uuid.v4(),
    resourceUrl: url(),
    endpointBase: uuid.v4()
  },
  identityAppUrl: url(),
  serviceId: uuid.v4(),
  cookiePassword: uuid.v4(),
  cookieName: uuid.v4(),
  cacheSegment: uuid.v4(),
  passRequestToCacheMethods: false,
  cacheCookieTtlMs: 999999,
  disallowedRedirectPath: uuid.v4(),
  loginOnDisallow: false,
  isSecure: false,
  outboundPath: uuid.v4(),
  redirectUri: uuid.v4(),
  logoutPath: uuid.v4(),
  appDomain: url(),
  clientId: uuid.v4(),
  clientSecret: uuid.v4(),
  defaultPolicy: uuid.v4(),
  defaultJourney: uuid.v4(),
  onByDefault: true,
  defaultBackToPath: uuid.v4(),
  postAuthenticationRedirectJsPath: uuid.v4(),
  defaultScope: uuid.v4(),
  retryDelayMultiplierSecs: 5
}
