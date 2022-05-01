const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objRes = {};
  const arr = domains.map((e) => e.split('.').reverse(''));

  arr.forEach((item) => {
    let key = '';
    item.forEach((e) => {
      key = `${key}.${e}`;
      !objRes[key] ? (objRes[key] = 1) : (objRes[key] += 1);
    });
  });

  return objRes;
}

module.exports = {
  getDNSStats
};
