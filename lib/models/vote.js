'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var VoteSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  sweepstake: { type: Types.ObjectId, ref: 'Sweepstake' },
  strategy: { type: Types.ObjectId, ref: 'Strategy' },
  created_at: { type: Date, default: Date.now() },
  voted_by: { type: Types.ObjectId, ref: 'User' }

});

VoteSchema.static('counter', function(user_id, sweepstake_id, strategy_id, cb) {

  this.find({ user: user_id, sweepstake: sweepstake_id, strategy: strategy_id }, function(err, votes) {
    if (err) return cb(err);
    return cb(null, votes.length);
  });  

});

VoteSchema.static('findByNotDrawing', function(user_id, sweepstake_id, strategy_id, cb) {

  this.find({ user: user_id, sweepstake: sweepstake_id, strategy: strategy_id, was_drawing: false })
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

VoteSchema.static('winByMatch', function(ids, sweepstake_id) {
  var Strategy = mongoose.model('Strategy'),
      Sweepstake = mongoose.model('Sweepstake'),
      Win = mongoose.model('Win');

  console.log('winByMatch:', ids, sweepstake_id);

  this.find({ strategy: { $in: ids } }, function(err, votes) {
    if (!err) {

      console.log('winByMatch votes:', votes);

      var amount = votes.length;
      var index = Math.floor(Math.random() * amount);

      var winner = votes[index];

      Strategy.findById(winner.strategy, function(err, _strategy) {
        if (!err) {

          var win = new Win();
          win.user = _strategy.user;
          win.sweepstake = winner.sweepstake;
          win.vote = winner._id;

          win.save(function(err) {
            if (!err) {

              // Strategy.close(sweepstake_id);
              Sweepstake.finallyProcess(sweepstake_id, win._id);

            };
          });

        };
      });

    };
  });

});

VoteSchema.static('winByGroup', function(ids) {

});

VoteSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
});

VoteSchema.post('save', function(vote) {

  var Strategy = mongoose.model('Strategy');

  if (this.wasNew) {
    var that = this;
    Strategy.addVote(this.strategy, this._id, this.user, this.voted_by, function(err, amount_votes) {
      if (!err) {
        // EMIT SOCKET IO PARA REFRESCO DE VOTOS DE LA STRATEGIA
        global.io.sockets.in('strategy/add/vote').emit('strategy.add.vote', { id: that.strategy, amount: amount_votes });
      };
    });

    jobs.create('log', { 
      action: "VOTE:CREATE",
      data: this
    })
    .priority('high')
    .save();

  };

});

module.exports = mongoose.model('Vote', VoteSchema);