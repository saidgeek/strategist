'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types,
    crypto = require('crypto');
  
var authTypes = ['TWITTER', 'FACEBOOK'];
var roleTypes = ['CONTESTANT', 'MODERATOR', 'ADMIN']

/**
 * User Schema
 * Roles:
 *  - contestant
 *  - moderator
 *  - admin
 */
var UserSchema = new Schema({
  name: String,
  email: { type: String, lowercase: true, default: null },
  avatar: String,
  twitter_screen_name: { type: String, default: null },
  facebook: {
    email: { type: String, lowercase: true, default: null },
  },
  provider: {
    facebook: { type: Types.ObjectId, ref: 'Provider', default: null },
    twitter: { type: Types.ObjectId, ref: 'Provider', default: null }
  },
  role: { type: String, default: 'CONTESTANT' },
  hashedPassword: String,
  salt: String,
  token: String,
  accept_terms: { type: Boolean, default: true },
  created_by: { type: Types.ObjectId, ref: 'User', default: null },
  created_at: { type: Date, default: Date.now() }
});

/**
 * Virtuals
 */
UserSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// Basic info to identify the current authenticated user in the app
UserSchema
  .virtual('userInfo')
  .get(function() {
    return {
      'id': this._id,
      'name': this.name,
      'role': this.role,
      'terms': this.accept_terms,
      'provider': this.provider,
      'email': this.email,
      'token': this.token
    };
  });

// Public profile information
UserSchema
  .virtual('profile')
  .get(function() {
    return {
      'name': this.name,
      'role': this.role
    };
  });
    
/**
 * Validations
 */

// Validate empty email
UserSchema
  .path('email')
  .validate(function(email) {
    if (['MODERATOR', 'ADMIN'].indexOf(this.role) > -1) {
      // if you are authenticating by any of the oauth strategies, don't validate
      if (authTypes.indexOf(this.provider) !== -1) return true;
      return email.length;
    }
    return true;
  }, 'Email cannot be blank');

// Validate empty password
UserSchema
  .path('hashedPassword')
  .validate(function(hashedPassword) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashedPassword.length;
  }, 'Password cannot be blank');

// Validate email is not taken
UserSchema
  .path('email')
  .validate(function(value, respond) {
    if (['MODERATOR', 'ADMIN'].indexOf(this.role) > -1) {
      var self = this;
      this.constructor.findOne({email: value}, function(err, user) {
        if(err) throw err;
        if(user) {
          if(self.id === user.id) return respond(true);
          return respond(false);
        }
        respond(true);
      });
    };
    respond(true);
}, 'The specified email address is already in use.');

var validatePresenceOf = function(value) {
  return value && value.length;
};

/**
 * Pre-save hook
 */
UserSchema
  .pre('save', function(next) {
    this.wasNew = this.isNew;
    if (this.isNew) {

    };

    if (!this.isNew && this.isModified('email') && this.role === 'CONTESTANT') {
      jobs.create('user_welcome', { user: this._id }).priority('high').save();
    };

    if (!validatePresenceOf(this.hashedPassword) && roleTypes.indexOf(this.role) === -1)
      next(new Error('Invalid password'));
    else
      next();
  });

UserSchema.post('save', function() {
  var Token = mongoose.model('Token');
  if (this.wasNew) {
    Token.genToken(this._id, this.role);
  };

});

UserSchema.post('remove', function(user) {
  var Token = mongoose.model('Token');
  Token.remove(user._id);
});

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   */
  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */
  encryptPassword: function(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};

module.exports = mongoose.model('User', UserSchema);
