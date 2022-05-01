const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let time = options.repeatTimes;
  let separator = options.separator;
  let addition = options.addition;
  let addTime = options.additionRepeatTimes;
  let addSeparator = options.additionSeparator;
  

  if (str === undefined) {
    return false;
  }
    if (separator === undefined) {
      separator = '+';
    }
    if (addSeparator === undefined) {
      addSeparator = '|';
    }
    if (addTime=== undefined) {
      addTime = 1;
    }
    if (addition === undefined) {
      addition = '';
    }
    if (time === undefined) {
      time = 1;
    }
    for (let i = 0; i < time; i++) {
      res = res + str;
    for (let j = 0; j < addTime; j++) {
      if (j != addTime - 1 ) {
      res = res + addition + addSeparator;
    }
    else {
      res = res + addition;
    }
  }
    if (i != time - 1 ) {
      res = res + separator;
    }
  }
    return res;
}

module.exports = {
  repeater
};
