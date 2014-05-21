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
    approved_at: { type: Date, default: null },
    rejected_at: { type: Date, default: null }
  },
  votes: {
    count: { type: Number, default: 0 },
    ref: [{ type: Types.ObjectId, ref: 'Vote' }]
  },
  // shared: {
  //   facebook: [{
  //     user: { type: Types.ObjectId, ref: 'User' },
  //     shared_at: { type: Date, default: Date.now() }
  //   }],
  //   twitter: [{
  //     user: { type: Types.ObjectId, ref: 'User' },
  //     shared_at: { type: Date, default: Date.now() }
  //   }]
  // },
  created_at: { type: Date, default: Date.now() }

});

StrategySchema.static('addVote', function(id, vote_id, cb) {

  this.findById(id, function(err, strategy) {
    if (!err) {

      strategy.votes.ref.push(vote_id);
      strategy.count = strategy.votes.ref.length;

      strategy.save(function(err) {
        if (!err) return cb(err);
        cb(null, strategy.count);
      });

    };
  });

});

module.exports = mongoose.model('Strategy', StrategySchema);