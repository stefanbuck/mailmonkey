/*
 * mailmonkey
 * user/repo
 *
 * Copyright (c) 2014 stefanbuck
 * Licensed under the MIT license.
 */

'use strict';

var Base = module.exports = function Base() {

};

Base.prototype.validate = function () {
  throw new Error('You have to override the validate method to implement your own validation logic.');
};

