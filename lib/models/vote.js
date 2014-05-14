'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var VoteSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  match: { type: Types.ObjectId, ref: 'Match' },
  strategy: { type: Types.ObjectId, ref: 'Strategy' },
  is_draw: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Vote', VoteSchema);