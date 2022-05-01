const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {	
	let sum = 1;
	let res = [];
	let arr = str.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			sum++;
		} else {
			sum > 1 ? res.push(sum, arr[i]) : res.push(arr[i])
			sum = 1;
		}
	}
	return res.join('');
}

module.exports = {
  encodeLine
};
