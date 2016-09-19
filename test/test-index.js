const assert = require('chai').assert;
const scoreWord = require('../lib/components/score-word.js');
const scoreLetter = require('../lib/components/score-word.js');

describe('the test bundle', function () {
  it('should be wired up', function () {
    assert(true);
  });
});

describe('the scoreLetter function', function (){
  it('should return the number value of a capital letter', function () {
    let hi = scoreLetter('K');
    assert.equal(hi, 5);
  });

  // it('should not be case sensitive', function () {
  //   let hi = scoreLetter('k');
  //   assert.equal(hi, 5);
  // });
});

describe('the scoreWord function', function (){
  it('should return the number value of a word', function () {
    let value = scoreWord('hello');
    assert.equal(value, 8);
  });

  it ('should not be case sensitive', function (){
    let val1 = scoreWord('hello');
    let val2 = scoreWord('HElLo');
    assert.equal(val1, val2);
  });

  it('should return zero when given a falsey input', function () {
    let value = scoreWord('');
    let value2 = scoreWord(null);
    assert.equal(value, 0);
    assert.equal(value2, 0);
  });

  it('should strip whitespace from string inputs', function () {
    let value = scoreWord(' hello ');
    let hi = scoreWord('    k');
    assert.equal(value, 8);
    assert.equal(hi, 5);
  });

  it('accept a second argument that multiplies the returned result', function () {
    let value = scoreWord('hello', 2);
    assert.equal(value, 16);
  });
});

// function scoreLetter(a) {
//   let num = null;
//   _.forOwn(letterScores, function(value, key) {if (a === key) {num =value;}
//   });
//   return num;
// }
//
// function scoreWord(word) {
//   word = word.toUpperCase();
//   let val = null;
//   for (var i = 0; i < word.length; i++){
//    val = val + scoreLetter(word.charAt(i));
//   }
//   return val;
// }
