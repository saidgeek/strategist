'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/strategist-dev'
  },
  facebook: {
    id: '234873753378720',
    secret: 'ac9bd73592cc7507efcbba729bdd58bd',
    callback: 'http://localhost:9000/auth/facebook/callback'
  },
  twitter: {
    key: 'PTJM60GFvxoUa7TD19HzWwRcs',
    secret: 'YiU0tMMRSFNgupSNSQ5176GaFPrTPBDfEFwshHVkpCYaf5dFl1',
    callback: 'http://localhost:9000/auth/twitter/callback'
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    auth: ''
  }
};