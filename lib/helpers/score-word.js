import scoreLetter from './score-letter.js';

module.exports = (word, multi) => {
  if (!word) return 0;
  let val = null;
  let WORD = word.toUpperCase().split('');
  WORD.forEach((i) => val = val + scoreLetter(i));
  if (multi) return val * parseInt(multi);
  return val;
};
