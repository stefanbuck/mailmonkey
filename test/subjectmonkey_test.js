'use strict';

var mailMonkey = require('../index.js');
var assert = require('should');
var util = require('util');

describe('subjectmonkey', function () {

  var instance = null;

  beforeEach(function () {
    instance = mailMonkey();
    var subjectMonkey = new mailMonkey.SubjectMonkey(/^test$/g);
    instance.register(subjectMonkey);
  })

  it('should return an result', function () {
    var result = instance.process({subject: 'test'});
    result.should.be.an.Object;
  });

  it('should return null', function () {
    var result = instance.process({subject: 'test2'});
    (result === null).should.be.ok;
  });

});