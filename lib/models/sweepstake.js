'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types,
    moment = require('moment');

var SweepstakeSchema = new Schema({

  type: { type: String, default: 'MATCH' }, // MATCH or GROUP
  match: String,
  sweepstakes: [{ type: Types.ObjectId, ref: 'Sweepstake' }],
  job_id:  String,
  in_sweepstake_group: { type: Boolean, default: false },
  is_active: { type: Boolean, default: false },
  in_process: { type: Boolean, default: false },
  init_at: { type: Date, default: null },
  process_at: { type: Date, default: null },
  is_closed: { type: Boolean, default: false },
  closed_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() },
  winner: { type: Types.ObjectId, ref: 'Win', default: null }

});

SweepstakeSchema.static('sweepstakeGroup', function(ids) {
  this.find({ _id: { $in: ids } }, function(err, sweepstakes) {
    if (!err) {
      for (var i = 0; i < sweepstakes.length; i++) {
        sweepstakes[i].in_sweepstake_group = true;
        sweepstakes[i].save();
      };
    };
  });
});

SweepstakeSchema.static('initProcess', function(id, cb) {

  return this.findByIdAndUpdate(id, { in_process: true, is_active: false }, cb);

});

SweepstakeSchema.static('finallyProcess', function(id, win_id) {

  this.findById(id, function(err, sweepstake) {
    if (!err) {

      sweepstake.winner = win_id;
      sweepstake.in_process = false;
      sweepstake.is_closed = true;

      sweepstake.save();

    };
  });

});

SweepstakeSchema.static('next', function(current_id) {

  console.log('next() current_id:', current_id);

  this.findOne({ _id: { $ne: current_id }, is_active: false, is_closed: false, in_process: false })
    .sort('created_at _id')
    .limit(1)
    .exec(function(err, sweepstake) {
      if (!err) {

        console.log('next() sweepstake:', sweepstake);

        sweepstake.is_active = true;
        sweepstake.save();

      };
    });

});

SweepstakeSchema.static('current', function(cb) {
  this.findOne({ is_active: true } ,function(err, sweepstake) {
    if (err) return cb(err);
    return cb(null, sweepstake);
  });
});

SweepstakeSchema.static('hasNext', function(cb) {
  this.find({ is_active: true })
    .sort('created_at _id')
    .limit(1)
    .exec(function(err, sweepstake) {
      if (err) return cb(err);
      if (!sweepstake) return cb(null, null);
      return cb(null, sweepstake[0]);
    });
});

SweepstakeSchema.pre('save', function(next) {
  this.wasNew = this.isNew;

  if (this.isNew) {

    var now = moment(Date.now());
    var init = moment(this.init_at);

    var _time = init.diff(now, 'milliseconds');
    // CREACION DEL JOB INIT_PROCCES
    jobs.create('create_sweepstake', {
      id: this._id,
      time: _time,
      type: this.type,
      sweepstakes: this.sweepstakes
    })
    .priority('high')
    .save();
  };

  if (!this.isNew && this.isModified('is_active') && this.is_active) {
    // ACCION AL PASAR A ACTIVO EL SORTEO
  };

  if (!this.isNew && this.isModified('in_process') && this.in_process) {
    this.process_at = Date.now();
    // ACCION AL INICIAR EL SORTEO
  };

  if (!this.isNew && this.isModified('is_closed') && this.is_closed) {
    this.closed_at = Date.now();
    this.is_active = false;
    // this.constructor.next(); // <-------- este deberia ser antes, despues de iniciar el sorteo
    // SOCKET PARA QUE TODOS SE VAYAN A LA PAGINA DE GANADORES
    global.io.sockets.in('strategy/sweepstake/redirect/wins').emit('sweepstake.redirect.to.wins');
  };

  next();
});

SweepstakeSchema.post('save', function() {
  if (this.wasNew) {
    if (this.type === 'GROUP') {
      this.constructor.sweepstakeGroup(this.sweepstakes);
    };

    jobs.create('log', { 
      action: "SWEEPSTAKE:CREATE:"+this.type.toUpperCase(),
      data: this
    })
    .priority('high')
    .save();
  };
});

SweepstakeSchema.post('remove', function(sweepstake) {
  jobs.create('remove_sweepstake', {
    id: sweepstake.job_id
  })
  .priority('high')
  .save();
});

module.exports = mongoose.model('Sweepstake', SweepstakeSchema);