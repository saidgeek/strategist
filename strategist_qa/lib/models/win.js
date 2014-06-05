'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var WinSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  sweepstake: { type: Types.ObjectId, ref: 'Sweepstake' },
  vote: { type: Types.ObjectId, ref: 'Vote' },
  creatad_at: { type: Date, default: Date.now() }

});

WinSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
});

WinSchema.post('save', function() {
  if (this.wasNew) {
    jobs.create('log', { 
      action: "WIN:CREATE",
      data: this
    })
    .priority('high')
    .save();
  };

  // ENVIAR CORREO AL GANADOR
});

module.exports = mongoose.model('Win', WinSchema);