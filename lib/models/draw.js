'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var DrawSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  match: { type: Types.ObjectId, ref: 'Match' },
  strategy: { type: Types.ObjectId, ref: 'Strategy' },
  votes: [{ type: Types.ObjectId, ref: 'Vote' }],
  close: { type: Boolean, default: false },
  close_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() }

});

DrawSchema.static('findPossibility', function(user_id, match_id, strategy_id) {

  var Vote = mongoose.model('Vote');

  Vote.length(user_id, match_id, strategy_id, function(err, amount_votes) {
    if (!err) {

      if (amount_votes > 0) {

        if (amount_votes == 1) {
          Vote.firstVote(user_id, match_id, strategy_id, function(err, vote_id) {
            if (!err) {

              var draw = new this();
              draw.user = user_id;
              draw.match = match_id;
              draw.strategy = startegy_id;
              draw.votes.push(vote_id);
              draw.save(function(err) {
                if (!err) {

                  Vote.changeStateDrawing(draw.votes);

                };
              });

            };
          });
        };

        if (amount_votes > 1) {
          Vote.findByNotDrawing(user_id, match_id, strategy_id, function(err, votes_ids) {
            if (!err) {
              if (votes_ids.length == 5) {
                var draw = new this();
                draw.user = user_id;
                draw.match = match_id;
                draw.strategy = startegy_id;
                draw.votes = votes_ids;
                draw.save(function(err) {
                  if (!err) {

                    Vote.changeStateDrawing(draw.votes);

                  };
                });
              };
            };
          });
        };

      };

    };
  });

});

DrawSchema.static('selectWin', function(ids, match_id) {
  var mongoose = require('mongoose'),
      Win = mongoose.model('Win'),
      Match = mongoose.model('Match'),
      Vote = mongoose.model('Vote'),
      Strategy = mongoose.model('Strategy');

  this.find({ strategy: { $in: ids }, match: match_id }, function(err, draws) {
    if (!err) {

      var amount = draws.length;
      var index = Math.floor(Math.random() * amount);

      var _win = draws[index];

      var win = Win();
      win.user = _win.user;
      win.match = _win.match;
      win.draw = _win._id;

      win.save(function(err) {
        if (!err) {
          // ENVIAR SOCKET.IO PARA CAMBIAR A LA PAGINA DE GANADOR

          this.update({ match: match_id }, { $set: { close: true, close_at: Date.now() } }).exec();
          Vote.update({ match: match_id }, { $set: { close: true, close_at: Date.now() } }).exec();
          Strategy.update({ match: match_id }, { $set: { close: true, close_at: Date.now() } }).exec();
          Match.update({ _id: match_id }, { $set: { completed: true, completed_at: Date.now() } }).exec();

        };
      });

    };
  });

});

module.exports = mongoose.model('Draw', DrawSchema);