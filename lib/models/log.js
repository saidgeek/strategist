'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var LogSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'user' },
  _type: String,
  referre: {
    id: String,
    class_name: String
  },
  created_at: { type: Date, default: Date.now() }

});

module.exports = mongoose.model('Log', LogSchema);