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

VoteSchema.static('counter', function(user_id, match_id, strategy_id, cb) {

  this.find({ user: user_id, match: match_id, strategy: strategy_id }, function(err, votes) {
    if (err) return cb(err);
    return cb(null, votes.length);
  });  

});

VoteSchema.static('findByNotDrawing', function(user_id, match_id, strategy_id, cb) {

  this.find({ user: user_id, match: match_id, strategy: strategy_id, was_drawing: false })
    .select('_id')
    .exec(function(err, votes) {
      if (err) return cb(err);
      var votes_ids = [];
      for (var i = 0; i < votes.length; i++) {
        votes_ids.push(votes[i]._id);
      };
      return cb(null, votes_ids);
    });

});

VoteSchema.static('changeStateDrawing', function(ids) {

  for (var i = 0; i < ids.length; i++) {

    this.findByIdAndUpdate(ids[i], { was_drawing: true }).exec()
    
  };

});

VoteSchema.pre('save', function(next) {
  this.wasNew = this.isNew;

  next();
});

VoteSchema.post('save', function(vote) {

  var Strategy = mongoose.model('Strategy'),
      Draw = mongoose.model('Draw');

  if (this.wasNew) {
    var that = this;
    Strategy.addVote(this.strategy, this._id, this.user, function(err, amount_votes) {
      if (!err) {
        Draw.findPossibility(that.user, that.match, that.strategy);
        // EMIT SOCKET IO PARA REFRESCO DE VOTOS DE LA STRATEGIA
      };
    });
  };

});

module.exports = mongoose.model('Vote', VoteSchema);