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

  it('should cut by RegExp', function () {
    var str = 'Some_string';

    should(cutSubstr(str, /\_[a-z]{6}$/i)).equal('Some');
    should(cutSubstr(str, /\_/i, /[a-z]{6}$/)).equal('Some');
    should(cutSubstr(str, /^[a-z]{4}/i, /\_/)).equal('string');
  });

});