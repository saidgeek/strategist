'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var StrategySchema = new Schema({

  content: String,
  user: { type: Types.ObjectId, ref: 'User' },
  sweepstake: { type: Types.ObjectId, ref: 'Sweepstake' },
  published: { type: Boolean, default: false },
  published_at: { type: Date, default: null },
  moderating: { type: Boolean, default: false },
  moderating_at: { type: Date, default: null },
  moderate: {
    approved: { type: Boolean, default: false },
    rejected: { type: Boolean, default: false },
    approved_at: { type: Date, default: null },
    rejected_at: { type: Date, default: null }
  },
  votes: {
    count: { type: Number, default: 0 },
    ref: [{
      vote: { type: Types.ObjectId, ref: 'Vote' },
      user: { type: Types.ObjectId, ref: 'User' },
      created_at: { type: Date, default: Date.now() }
    }]
  },
  close: { type: Boolean, default: false },
  close_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() }

});

StrategySchema.static('addVote', function(id, vote_id, user_id, cb) {

  this.findById(id, function(err, strategy) {
    if (!err) {

      strategy.votes.ref.push({
        vote: vote_id,
        user: user_id
      });
      strategy.votes.count = strategy.votes.ref.length;

      strategy.save(function(err) {
        if (!err) return cb(err);
        cb(null, strategy.count);
      });

    };
  });

});

StrategySchema.static('selectStrategyForDraw', function(sweepstake_ids, cb) {

  this.find({ sweepstake: { $in: sweepstake_ids }, 'votes.count': { $gt: 0 }, 'moderating': false }, function(err, strategies) {
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

StrategySchema.static('close', function(ids) {

  this.find({ _id: { $in: ids } },  function(err, strategies) {
    if (!err) {

      for (var i = 0; i < strategies.length; i++) {
        strategies[i].close = true;
        strategies[i].save();
      };

    };
  });

});

StrategySchema.pre('save', function(next) {
  if (this.isNew) {
    this.wasNew = this.isNew;
  };

  if (!this.isNew && this.isModified('published') && this.published) {
    this.published_at = Date.now();
    // ENVIO DE CORREO "SE A PUBLICADO" Y SOCKET.IO
    global.io.sockets.in('strategy/new').emit('new.strategy', this._id);
  };

  if (!this.isNew && this.isModified('moderating') && this.moderating && !this.moderate.approved && !this.rejected) {
    this.moderating_at = Date.now();
    // ENVIO CORREO "SE A MODERADO"
    global.io.sockets.in('strategy/moderate/'+this.user).emit('strategy.moderate');
  };

  if (!this.isNew && this.isModified('moderating') && this.moderate.approved) {
    // ENVIO CORREO "SE A APROBADO Y PUBLICADO", SOCKET.IO
  };

  if (!this.isNew && this.isModified('moderating') && this.rejected) {
    // ENVIO CORREO "SE A RECHAZADO"
  };

  if (!this.isNew && this.isModified('close') && this.close) {
    this.close_at = Date.now();
  };

  next();
});

StrategySchema.post('save', function() {
  if (this.wasNew) {
    var Library = mongoose.model('Library');
    Library.findComparision(this._id);
  };
});

module.exports = mongoose.model('Strategy', StrategySchema);