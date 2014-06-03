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
        if (err) return cb(err);
        cb(null, strategy.votes.count);
      });

    };
  });

});

StrategySchema.static('selectStrategyForDraw', function(sweepstake_ids, cb) {

  this.find({})
    .where({ sweepstake: { $in: sweepstake_ids } })
    .where('votes.count').gt(0)
    .where({ moderating: false })
    .exec(function(err, strategies) {
      if (!err) {

        var ids = [];
        for (var i = 0; i < strategies.length; i++) {
          ids.push(strategies[i]._id);
        };

        console.log('ids:', ids);

        return cb(null, ids);

      };
    });

});

StrategySchema.static('close', function(sweepstake_id) {

  this.find({ sweepstake: sweepstake_id },  function(err, strategies) {
    if (!err) {

      for (var i = 0; i < strategies.length; i++) {
        strategies[i].close = true;
        strategies[i].save();
      };

    };
  });

});

StrategySchema.static('getContestant', function(ids, cb) {

  this.find({ _id: { $in: ids } }, function(err, strategies) {
    if (err) return cb(err);
    var users = [];
    for (var i = 0; i < strategies.length; i++) {
      users.push(strategies[i].user);
    };
    return cb(null, users);
  });
});

StrategySchema.pre('save', function(next) {
  if (this.isNew) {
    this.wasNew = this.isNew;
  };

  if (!this.isNew && this.isModified('published') && this.published) {
    this.published_at = Date.now();
    // ENVIO DE CORREO "SE A PUBLICADO" Y SOCKET.IO
    console.log('isModified(published):');
    global.io.sockets.in('strategy/new').emit('new.strategy', this._id);
    global.io.sockets.in('strategy/last/publish/'+this.user).emit('my.last.strategy', this._id);
  };

  if (!this.isNew && this.isModified('moderating') && this.moderating && !this.moderate.approved && !this.rejected) {
    this.moderating_at = Date.now();
    // ENVIO CORREO "SE A MODERADO"
    global.io.sockets.in('strategy/moderate/'+this.user).emit('strategy.moderate');
    jobs.create('strategy_moderate', { user: this.user }).priority('high').save();
    global.io.sockets.in('strategy/moderating').emit('new.moderating.strategy', this._id);
  };

  if (!this.isNew && this.isModified('moderating') && !this.moderating && this.moderate.approved) {
    this.moderate.approved_at = Date.now();
    // ENVIO CORREO "SE A APROBADO Y PUBLICADO", SOCKET.IO
    jobs.create('strategy_accepted', { user: this.user }).priority('high').save();
  };

  if (!this.isNew && this.isModified('moderate.rejected') && this.moderating && this.moderate.rejected) {
    this.moderate.rejected_at = Date.now();
    // ENVIO CORREO "SE A RECHAZADO"
    jobs.create('strategy_rejected', { user: this.user }).priority('high').save();
  };

  if (!this.isNew && this.isModified('close') && this.close) {
    this.close_at = Date.now();
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