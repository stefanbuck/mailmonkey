/*
 * mailmonkey
 * user/repo
 *
 * Copyright (c) 2014 stefanbuck
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');
var Base = require('./base.js');

var MailMonkey = module.exports = function MailMonkey() {
  this._monkeys = [];
};

MailMonkey.prototype.register = function (monkey) {

  if (monkey.validate === Base.prototype.validate) {
    throw new Error('You have to override the validate method to implement your own validation logic.');
  }

  this._monkeys.push(monkey);
};

MailMonkey.prototype.process = function (mail) {

  var result = _.find(this._monkeys, function (monkey) {
    return monkey.validate(mail);
  });

  if (!result) {
    return null;
  }

  return result;
};