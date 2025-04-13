/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const array = Array.from(String(x), Number).reverse()
const number = parseInt(array.join('')) * Math.sign(x);
  if(number > 2147483647 || number < -2147483648){
return 0
    }else{
      
        return number
    }
};
