var cutSubstr = require('../');
var should = require('should');

describe('cutSubstring', function () {

  it('should be a function', function() {
    should(cutSubstr).be.a.Function();
  });

  it('should cut by index', function () {
    var str = 'Some string';

    should(cutSubstr(str, 4, str.length)).equal('Some');
    should(cutSubstr(str, 4)).equal('Some');
    should(cutSubstr(str, 0, 5)).equal('string');
  });

});