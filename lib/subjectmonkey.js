'use strict';

var Base = require('./base.js');
var util = require('util');

var SubjectMonkey = module.exports = function (subject) {
  this.subject = subject;
};

util.inherits(SubjectMonkey, Base);

SubjectMonkey.prototype.validate = function (mail) {
  return this.subject.test(mail.subject);
};
