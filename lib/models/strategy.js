'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var StrategySchema = new Schema({

  content: String,
  user: { type: Types.ObjectId, ref: 'User' },
  match: { type: Types.ObjectId, ref: 'Match' },
  moderating: { type: Boolean, default: false },
  moderate: {
    approved: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
    approved_at: { type: Date, default: Date.now() },
    rejected_at: { type: Date, default: false }
  },
  shared: {
    facebook: {[
      user: { type: Types.ObjectId, ref: 'User' },
      shared_at: { type: Date, default: Date.now() }
    ]},
    twitter: {[
      user: { type: Types.ObjectId, ref: 'User' },
      shared_at: { type: Date, default: Date.now() }
    ]}
  },
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Strategy', StrategySchema);