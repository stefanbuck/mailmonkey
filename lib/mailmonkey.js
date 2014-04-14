/*
 * mailmonkey
 * user/repo
 *
 * Copyright (c) 2014 stefanbuck
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

var MailMonkey = module.exports = function MailMonkey() {
  this._monkeys = [];
};

MailMonkey.prototype.register = function (monkey) {

  if (typeof monkey.validate() !== 'boolean') {
    throw new Error('The validate method must return an boolean value.');
  }

  this._monkeys.push(monkey);
};

MailMonkey.prototype.process = function (mail) {

  var m = _.find(this._monkeys, function (monkey) {
    return monkey.validate(mail);
  });

  return m;
};