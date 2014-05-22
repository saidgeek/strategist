'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var VoteSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  match: { type: Types.ObjectId, ref: 'Match' },
  strategy: { type: Types.ObjectId, ref: 'Strategy' },
  was_drawing: { type: Boolean, default: false },
  close: { type: Boolean, default: false },
  close_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() }

});

VoteSchema.static('length', function(user_id, match_id, strategy_id, cb) {

  this.find({ user: user_id, match: match_id, strategy: strategy_id }, function(err, votes) {
    if (err) return cb(err);
    return cb(null, votes.length);
  });  

});

VoteSchema.static('fisrtVote', function(user_id, match_id, strategy_id, cb) {

  this.find({ was_drawing: false })
    .limit(1)
    .exec(function(err, votes) {
      if (err) return cb(err);
      return cb(null, votes[0]._id);
    });

});

VoteSchema.static('findByNotDrawing', function(user_id, match_id, strategy_id, cb) {

  this.find({ user: user_id, match: match_id, strategy: strategy_id, was_drawing: false })
    .select('_id')
    exec(function(err, votes) {
      if (err) return cb(err);
      var votes_ids = [];
      for (var i = 0; i < votes.length; i++) {
        votes_ids.push(votes[i]._id);
      };
      return cb(null, votes_ids);
    });

});

VoteSchema.static('changeStateDrawing', function(ids, cb) {

  return this.update({ _id: { $in: ids } }, { $set: { was_drawing: true } }, cb);

});

VoteSchema.post('save', function(vote) {

  var Strategy = mongoose.model('Strategy'),
      Draw = mongoose.model('Draw');

  console.log('post save - vote?:', vote);

  Strategy.addVote(this.strategy, this._id, function(err, amount_votes) {
    if (!err) {
      Draw.findPossibility(this.user, this.match, this.strategy);
      // EMIT SOCKET IO PARA REFRESCO DE VOTOS DE LA STRATEGIA
    };
  });

});

module.exports = mongoose.model('Vote', VoteSchema);