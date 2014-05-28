'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var WinSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  sweepstake: { type: Types.ObjectId, ref: 'Sweepstake' },
  draw: { type: Types.ObjectId, ref: 'Draw' },
  creatad_at: { type: Date, default: Date.now() }

});

WinSchema.post('save', function() {
  // ENVIAR CORREO AL GANADOR
});

module.exports = mongoose.model('Win', WinSchema);