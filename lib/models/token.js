'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var TokenSchema = new Schema({

  token: String,
  user: { type: Types.ObjectId, ref: 'user' },
  access: { type: String, default: 'CONTESTANT' },
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Token', TokenSchema);