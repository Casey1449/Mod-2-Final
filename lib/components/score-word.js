const _ = require('lodash');
const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
};

function scoreLetter(a) {
  let num = null;
  _.forOwn(letterScores, function(value, key) {if (a === key) {num =value;}
  });
  return num;
}

function scoreWord(word, multi){
  if(!word){return 0;}
  word = word.toUpperCase();
  let val = null;
  for (var i = 0; i < word.length; i++){
     val = val + scoreLetter(word.charAt(i));
    }
  if(multi)
    {return val * multi;}
  return val;
}

module.exports = scoreWord;

// anyString.charAt(0)
