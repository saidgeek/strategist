'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var WinSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User' },
  match: { type: Types.ObjectId, ref: 'Match' },
  draw: { type: Types.ObjectId, ref: 'Draw' },
  creatad_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Win', WinSchema);