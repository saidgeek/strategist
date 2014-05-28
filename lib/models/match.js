'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = mongoose.Schema.Types,
    moment = require('moment');

var MatchSchema = new Schema({

  team_one: String,
  team_two: String,
  sweepstake: {
    match: {
      id: { type: Types.ObjectId, ref: 'Sweepstake', default: null },
      win: { type: Types.ObjectId, ref: 'Win', default: null }
    },
    group: {
      id: { type: Types.ObjectId, ref: 'Sweepstake', default: null },
      win: { type: Types.ObjectId, ref: 'Win', default: null }
    }
  },
  created_at: { type: Date, default: Date.now() },
  created_by: { type: Types.ObjectId, ref: 'User' }

});

MatchSchema.pre('save', function(next) {
  if (this.isNew) {
    
  };

  next();
});

MatchSchema.post('remove', function(match) {
  

});

module.exports = mongoose.model('Match', MatchSchema);