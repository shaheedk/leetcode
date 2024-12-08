/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
let result=address.replace(/\./g, "[.]");
return result
};