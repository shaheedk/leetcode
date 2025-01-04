/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  let str = n.toString(); // Convert the number to a string
  let result = "";

  // Add thousand separators
  for (let i = str.length - 1, count = 0; i >= 0; i--, count++) {
    result = str[i] + result;
    if ((count + 1) % 3 === 0 && i !== 0) {
      result = "." + result;
    }
  }

  return result;
};
