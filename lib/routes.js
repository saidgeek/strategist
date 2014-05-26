'use strict';

var index = require('./controllers'),
    users = require('./controllers/api/users'),
    library = require('./controllers/api/library'),
    match = require('./controllers/api/match'),
    strategy = require('./controllers/api/strategy'),
    vote = require('./controllers/api/vote'),
    session = require('./controllers/session'),
    middleware = require('./middleware'),
    twitter = require('./controllers/twitter');

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
    .get(passport.authenticate('facebook', { successRedirect: '/mi-mejor-tactica/', failureRedirect: '/' }));

  app.route('/auth/twitter')
    .get(passport.authenticate('twitter'));

  app.route('/auth/twitter/callback')
    .get(twitter.cb);

  app.route('/auth/twitter/:id')
    .get(twitter.email)
    .post(twitter.create);

  // API
  // USERS ==================================/
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  
  app.route('/api/users/me')
    .get(users.me);
  
  app.route('/api/users/:id')
    .get(users.show);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // MATCH ==================================/
  app.route('/api/matches')
    .get(match.index)
    .post(match.create);

  app.route('/api/matches/current')
    .get(match.current);


  // LIBRARY ==================================/
  app.route('/api/libraries')
    .get(library.index)
    .post(library.create);

  app.route('/api/libraries/:id')
    .delete(library.remove);

  // STRATEGY ==================================/
  app.route('/api/strategies/:id')
    .get(strategy.show);

  app.route('/api/strategies(/:match)?(/sort/:sort_by)?')
    .get(strategy.index)
    .post(strategy.create);

  // VOTE ==================================/
  app.route('/api/vote/:user_id/:strategy_id/:match_id')
    .post(vote.create);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
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
    .get( middleware.setUserCookie, index.admin);

  app.route('/')
    .get(middleware.redirectStrategy, index.index);

  app.route('/mobile/*')
    .get( middleware.setUserCookie, index.mobile);

  app.route('/admin/*')
    .get( middleware.setUserCookie, index.admin);

  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};