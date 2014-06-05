'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var ProviderSchema = new Schema({

  user: { type: Types.ObjectId, ref: 'User', default: null },
  type: String,
  uid: String,
  profile: {},
  tokens: {},
  created_at: { type: Date, default: Date.now() }

});

ProviderSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next()
});

ProviderSchema.post('save', function() {
  if (this.wasNew) {
    jobs.create('log', { 
      action: "PROVIDER:CREATE:"+this.type.toUpperCase(),
      data: this
    })
    .priority('high')
    .save();
  };
});

module.exports = mongoose.model('Provider', ProviderSchema);