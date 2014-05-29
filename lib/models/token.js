'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types,
    uuid = require('node-uuid');

var TokenSchema = new Schema({

  key: String,
  user: { type: Types.ObjectId, ref: 'user' },
  access: { type: String, default: 'CONTESTANT' },
  created_at: { type: Date, default: Date.now() }

});

TokenSchema.static('genToken', function(user_id, role, cb) {

  console.log(user_id, role);

  var User = mongoose.model('User');

  var token = new this();
  token.key = uuid.v4();
  token.user = user_id;
  if (role !== 'CONTESTANT') token.access = role;

  token.save(function(err) {
    User.findByIdAndUpdate(user_id, { token: token.key }).exec();
  });

});

TokenSchema.static('remove', function(user_id) {
  this.findOneAndRemove({ user: user_id }).exec();
});

TokenSchema.static('isValid', function(key, cb) {

  return this.findOne({ key: key }, function(err, token) {
    if (err) return cb(err);
    if (!token) return cb(false);
    return cb(null, token.access);
  });

});

module.exports = mongoose.model('Token', TokenSchema);