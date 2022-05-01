const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrSum = [];
 
  for (let char of s2) {
    if (s1.includes(char)) {
      arrSum.push(char);
      s1 = s1.replace(char, '');
    }
  }
  return arrSum.length;
}

module.exports = {
  getCommonCharacterCount
};
