'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = mongoose.Schema.Types;

var MatchSchema = new Schema({

  team_one: String,
  team_two: String,
  match_at: Date,
  completed: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now() },
  created_by: { type: Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model('Match', MatchSchema);