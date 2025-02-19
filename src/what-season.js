const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

    if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  if (date.hasOwnProperty('toString')) {
    throw new Error('Invalid date!');
  }
  
  if (date.getMonth() == 0 || date.getMonth() == 11 || date.getMonth() == 1) {
    return 'winter';
  }

  if ((date.getMonth() > 1) && (date.getMonth() <= 4)) {
    return 'spring';
  }

  if ((date.getMonth() >= 5) && (date.getMonth() <= 7)) {
    return 'summer'; 
  }
  else {
    return 'autumn';
  }

}

module.exports = {
  getSeason
};
