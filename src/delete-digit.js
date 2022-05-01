const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrNum = n.toString().split('');
  let res = 0;
  for (let i = 0; i < arrNum.length; i++) {
    arrNum.splice(i, 1);
    if (+arrNum.join('') > res) {
      res = +arrNum.join('');
    }
    arrNum = n.toString().split('');
  }
  return res;
}

module.exports = {
  deleteDigit
};
