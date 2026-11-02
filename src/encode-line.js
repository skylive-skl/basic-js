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
  return str.replace(/(.)\1*/g, (run, char) => (run.length > 1 ? run.length : '') + char);
}

module.exports = {
  encodeLine
};
