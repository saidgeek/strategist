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
  in_procces: { type: Boolean, default: false },
  init_at: { type: Date, default: null },
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

SweepstakeSchema.pre('save', function(next) {
  this.wasNew = this.isNew;

  if (!this.isNew && this.isModified('is_active') && this.is_active) {
    // ACCION AL PASAR A ACTIVO EL SORTEO
  };

  if (!this.isNew && this.isModified('in_procces') && this.in_procces) {
    this.init_at = Date.now();
    // ACCION AL INICIAR EL SORTEO
  };

  if (!this.isNew && this.isModified('is_closed') && this.is_closed) {
    this.closed_at = Date.now();
    // ACCION AL INICIAR EL SORTEO
  };

  next();
});

SweepstakeSchema.post('save', function() {
  if (this.wasNew) {
    if (this.type === 'GROUP') {
      this.constructor.sweepstakeGroup(this.sweepstakes);
    };
    // var time = moment(this.match_at).millisecond();
    // var draw_job = jobs.create('init_draw', {
    //   match_id: this._id
    // })
    // .delay(time)
    // .priority('high')
    // .save(function() {
    //   this.draw_job = draw_job;
    // });
    // CREACION DEL JOB INIT_PROCCES
  };
});

SweepstakeSchema.post('save', function(sweepstake) {
  // jobs.create('remove_draw', {
  //   id: match.draw_job
  // })
  // .priority('high')
  // .save();
});

module.exports = mongoose.model('Sweepstake', SweepstakeSchema);