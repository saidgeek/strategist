'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var ProviderSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User', default: null },
  type: String,
  uid: String,
  profile: {},
  tokens: {},
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Provider', ProviderSchema);