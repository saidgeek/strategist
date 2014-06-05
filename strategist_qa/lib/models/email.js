'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Types = mongoose.Types,
    ejs = require('ejs');

var EmailSchema = new Schema({

  to: [],
  html: { type: String, trim: true},
  text: { type: String, trim: true},
  subject: { type: String, trim: true},
  sended_at: { type: Date, default: null },
  error: { type: String, default: null },
  created_at: { type: Date, default: Date.now() }

});

EmailSchema.virtual('content').set(function(data) {
  var template = require('../email/'+data.type);
  var _html = ejs.render(template.html, data);
  var _text = ejs.render(template.text, data);
  this.html = _html;
  this.text = _text;
});

EmailSchema.static('build', function(to, subject, data) {
  var User = mongoose.model('User');

  var email = this();
  email.to = to;
  email.subject = subject;
  email.content = data;

  email.save(function(err) {
    if (!err) {

      var message = {
        html: email.html,
        text: email.text,
        subject: email.subject,
        from_email: "no-replay@dev.com",
        from_name: "no-replay dev strategist",
        to: email.to,
        important: false,
        inline_css: null
      };

      global.mandrill.messages.send({message: message, async: true}, function(result) {
        console.log(result);
        email.update({ sended_at: Date.now() }).exec();
      }, function(e) {
        console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        email.update({ error: 'A mandrill error occurred: ' + e.name + ' - ' + e.message }).exec();
      });

    };
  });

});

module.exports = mongoose.model('Email', EmailSchema);