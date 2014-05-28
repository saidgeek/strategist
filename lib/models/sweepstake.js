'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var SweepstakeSchema = new Schema({

  type: { type: String, default: 'MATCH' }, // MATCH or GROUP
  match: { type: String, default: null },
  sweepstakes: [{ type: Types.ObjectId, ref: 'Sweepstake' }],
  job_id:  String,
  in_sweepstake_group: { type: Boolean, default: false },
  is_active: { type: Boolean, default: false },
  in_process: { type: Boolean, default: false },
  init_at: { type: Date, default: null },
  process_at: { type: Date, default: null },
  is_closed: { type: Boolean, default: false },
  closed_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() } 

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

  resultthis.findByIdAndUpdate(id, { in_process: true }, cb).exec();

});

SweepstakeSchema.static('finallyProcess', function(id) {

  this.findById(id, function(err, sweepstake) {
    if (!err) {

      sweepstake.in_process = false;
      sweepstake.is_closed = true;

      sweepstake.save();

    };
  });

});

SweepstakeSchema.static('next', function() {

  this.findOne({ is_closed: false })
    .sort('created_at _id')
    .exec(function(err, sweepstake) {
      if (!err) {

        sweepstake.is_active = true;
        sweepstake.save();

      };
    });

});

SweepstakeSchema.pre('save', function(next) {
  this.wasNew = this.isNew;

  if (this.isNew) {
    // CREACION DEL JOB INIT_PROCCES
    var time = moment(this.init_at).millisecond();
    var job = jobs.create('init_sweepstake', {
      id: this._id,
      sweepstakes: this.sweepstakes
    })
    .delay(time)
    .priority('high')
    .save(function() {
      this.job_id = job.id;
    });
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
    this.constructor.next();
  };

  next();
});

SweepstakeSchema.post('save', function() {
  if (this.wasNew) {
    if (this.type === 'GROUP') {
      this.constructor.sweepstakeGroup(this.sweepstakes);
    };
  };
});

SweepstakeSchema.post('save', function(sweepstake) {
  jobs.create('remove_sweepstake', {
    id: sweepstake.job_id
  })
  .priority('high')
  .save();
});

module.exports = mongoose.model('Sweepstake', SweepstakeSchema);