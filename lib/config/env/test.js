'use strict';

module.exports = {
  env: 'test',
  mongo: {
    uri: 'mongodb://localhost/strategist-test'
  },
  facebook: {
    id: '234873753378720',
    secret: 'ac9bd73592cc7507efcbba729bdd58bd',
    callback: 'http://localhost:9000/auth/facebook/callback'
  },
  twitter: {
    key: '9HiBGlQj0GD44YMMJ1ReM5cp5',
    secret: 'iPOoNaDcENV8AS9jJZghf9Fxwg2u3gP3rWIE6DYEznccaOnHXJ',
    callback: 'http://localhost:9000/auth/twitter/callback'
  }
};