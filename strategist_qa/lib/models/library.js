'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = Schema.Types;

var LibrarySchema = new Schema({

  comparison: { type: String, trim: true },
  quantity_comparisions: { type: Number, default: 0 },
  created_by: { type: Types.ObjectId, ref: 'User', default: null },
  created_at: { type: Date, default: Date.now() }

});

var specialChars = [
  {val:"a",let:"áàãâä"},
  {val:"e",let:"éèêë"},
  {val:"i",let:"íìîï"},
  {val:"o",let:"óòõôö"},
  {val:"u",let:"úùûü"},
  {val:"c",let:"ç"},
  {val:"A",let:"ÁÀÃÂÄ"},
  {val:"E",let:"ÉÈÊË"},
  {val:"I",let:"ÍÌÎÏ"},
  {val:"O",let:"ÓÒÕÔÖ"},
  {val:"U",let:"ÚÙÛÜ"},
  {val:"C",let:"Ç"},
  {val:"",let:"?!()"}
];

var replaceSpecialChars = function (str) {
  var regex;
  var returnString = str;
  for (var i = 0; i < specialChars.length; i++) {
    regex = new RegExp("["+specialChars[i].let+"]", "g");
    returnString = returnString.replace(regex, specialChars[i].val);
    regex = null;
  }
  return returnString.toUpperCase();
};


LibrarySchema.static('findComparision', function(strategy_id) {
  var Strategy = mongoose.model('Strategy');
  var that = this;

  Strategy.findById(strategy_id, function(err, strategy) {
    if (!err) {

      that.find({}, function(err, library) {
        if (!err) {

          for (var i = 0; i < library.length; i++) {
            
            var _content = replaceSpecialChars(strategy.content);
            var _comparer = replaceSpecialChars(library[i].comparison);
            var regex = new RegExp(_comparer);
            
            if (regex.test(_content)) {
              strategy.moderating = true;
              library[i].quantity_comparisions = library[i].quantity_comparisions + 1;
              library[i].save();
              break;
            };

          };

          if (strategy.moderating) {
            strategy.save();
          } else {
            strategy.published = true;
            strategy.save();
          };
        };
      });

    };
  });

});

module.exports = mongoose.model('Library', LibrarySchema);