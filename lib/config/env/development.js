'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/strategist-dev'
  },
  facebook: {
    id: '234873753378720',
    secret: 'ac9bd73592cc7507efcbba729bdd58bd',
    callback: 'http://strategist.dev/auth/facebook/callback'
  },
  twitter: {
    key: 'ubkBlRs5fQGSK4fBcZMUrdges',
    secret: 'o3QKaK1H4DVCbYSvE1Z4lo1fevQrWlymf5HIz0U2FgcSGbNLLO',
    callback: 'http://strategist.dev/auth/twitter/callback'
  },
  redis: {
    port: 6379,
    host: '127.0.0.1',
    auth: ''
  },
  mandrill: {
    key: 'BtL9UyvQpIC6mJzEnK2_CA'
  }
};