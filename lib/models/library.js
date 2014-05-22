'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var LibrarySchema = new Schema({

  comparison: { type: String, trim: true },
  compared: { type: Number, default: 0 },
  created_by: { type: Types.ObjectId, ref: 'User', default: null },
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Library', LibrarySchema);