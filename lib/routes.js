'use strict';

var index = require('./controllers'),
    users = require('./controllers/api/users'),
    library = require('./controllers/api/library'),
    match = require('./controllers/api/match'),
    strategy = require('./controllers/api/strategy'),
    vote = require('./controllers/api/vote'),
    session = require('./controllers/session'),
    middleware = require('./middleware'),
    twitter = require('./controllers/twitter'),
    facebook = require('./controllers/facebook');

/**
 * Application routes
 */
module.exports = function(app, passport) {

  // Server API Routes
  // app.route('/api/awesomeThings')
  //   .get(api.awesomeThings);

  // AUTH SOCIALS
  app.route('/auth/facebook')
    .get(passport.authenticate('facebook', { scope: ['email', 'user_friends'] }));

  app.route('/auth/facebook/callback')
    .get(facebook.cb);

  app.route('/auth/twitter')
    .get(passport.authenticate('twitter'));

  app.route('/auth/twitter/callback')
    .get(twitter.cb);

  // API
  // USERS ==================================/
  app.route('/api/users')
    .post(middleware.api_auth, users.create)
    .put(middleware.api_auth, users.changePassword);
  
  app.route('/api/users/me')
    .get(middleware.api_auth, users.me);
  
  app.route('/api/users/:id')
    .get(middleware.api_auth, users.show)
    .put(middleware.api_auth, users.update);

  app.route('/api/session')
    .post(middleware.api_auth, session.login)
    .delete(middleware.api_auth, session.logout);

  // MATCH ==================================/
  app.route('/api/matches')
    .get(middleware.api_auth, match.index)
    .post(middleware.api_auth, match.create);

  app.route('/api/matches/current')
    .get(middleware.api_auth, match.current);


  // LIBRARY ==================================/
  app.route('/api/libraries')
    .get(middleware.api_auth, library.index)
    .post(middleware.api_auth, library.create);

  app.route('/api/libraries/:id')
    .delete(middleware.api_auth, library.remove);

  // STRATEGY ==================================/
  app.route('/api/strategies/:id')
    .get(middleware.api_auth, strategy.show);

  app.route('/api/strategies(/:match)?(/sort/:sort_by)?')
    .get(middleware.api_auth, strategy.index)
    .post(middleware.api_auth, strategy.create);

  // VOTE ==================================/
  app.route('/api/vote/:user_id/:strategy_id/:match_id')
    .post(middleware.api_auth, vote.create);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(middleware.api_auth, function(req, res) {
      res.render('404');
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/directives/*')
    .get(index.directives);

  app.route('/mobile')
    .get( middleware.setUserCookie, index.mobile);

  app.route('/admin')
    .get(middleware.auth_admin, middleware.setUserCookie, index.admin);

  app.route('/')
    .get(middleware.auth_site, middleware.redirect_device, middleware.redirectStrategy, index.index);

  app.route('/mobile/*')
    .get(middleware.setUserCookie, index.mobile);

  app.route('/admin/*')
    .get(middleware.auth_admin, middleware.setUserCookie, index.admin);

  app.route('/*')
    .get(middleware.auth_site, middleware.redirect_device, middleware.setUserCookie, index.index);
};