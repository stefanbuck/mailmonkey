'use strict';

var MailMonkey = require('./lib/mailmonkey.js');

var mailmonkey = module.exports = function (name) {
  return new MailMonkey(name);
};

mailmonkey.Base = require('./lib/base');