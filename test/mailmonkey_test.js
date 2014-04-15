'use strict';

var mailMonkey = require('../index.js');
var assert = require('should');
var util = require('util');

describe('mailmonkey', function () {

  it('method and properties', function () {
    mailMonkey.should.be.a.Function;
    mailMonkey.Base.should.be.a.Function;
    mailMonkey().register.should.be.a.Function;
  });

  it('should thrown an error', function () {

    (function () {
      var monkey = new mailMonkey.Base();
      mailMonkey().register(monkey);
    }).should.throw('You have to override the validate method to implement your own validation logic.');
  });

  it('register a CustomMonkey', function () {
    (function () {

      var CustomMonkey = function () {
      }
      util.inherits(CustomMonkey, mailMonkey.Base);
      CustomMonkey.prototype.validate = function () {
        return false;
      };

      var monkey = new CustomMonkey();
      mailMonkey().register(monkey);
    }).should.not.throw();
  });

});