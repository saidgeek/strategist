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
  }
};