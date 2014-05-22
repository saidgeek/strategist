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
    approved: { type: Boolean, default: true },
    rejected: { type: Boolean, default: false },
    approved_at: { type: Date, default: null },
    rejected_at: { type: Date, default: null }
  },
  votes: {
    count: { type: Number, default: 0 },
    ref: [{ type: Types.ObjectId, ref: 'Vote' }]
  },
  close: { type: Boolean, default: false },
  close_at: { type: Date, default: null },
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

StrategySchema.static('selectStrategyForDraw', function(match_id, cb) {

  this.find({ match: match_id, 'votes.count': { $gt: 0 }, 'moderate.approved': true }, function(err, strategies) {
    if (!err) {

      var amount = strategies.length;
      var selected = Math.floor(amount * 0.25);
      var ids = [];

      for (var i = 0; i < selected; i++) {
        ids.push(strategies[i]._id);
      };

      return cb(null, ids);

    };
  });

});

module.exports = mongoose.model('Strategy', StrategySchema);