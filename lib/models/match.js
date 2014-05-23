'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = mongoose.Schema.Types,
    moment = require('moment');

var MatchSchema = new Schema({

  team_one: String,
  team_two: String,
  match_at: Date,
  draw_job: String,
  isDraw: { type: Boolean, default: false },
  completed: { type: Boolean, default: false },
  completed_at: { type: Date, default: null },
  created_at: { type: Date, default: Date.now() },
  created_by: { type: Types.ObjectId, ref: 'User' }

});

MatchSchema.static('isDraw', function(id, cb) {
  return this.update({ _id: id }, { $set: { isDraw: true } }, cb);
});

MatchSchema.pre('save', function(next) {
  if (this.isNew) {
    var time = moment(this.match_at).millisecond();
    var draw_job = jobs.create('init_draw', {
      match_id: this._id
    })
    .delay(time)
    .priority('high')
    .save(function() {
      this.draw_job = draw_job;
    });
  };

  next();
});

MatchSchema.post('remove', function(match) {

  jobs.create('remove_draw', {
    id: match.draw_job
  })
  .priority('high')
  .save();

});

module.exports = mongoose.model('Match', MatchSchema);