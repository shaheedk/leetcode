/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
  
    let sorted=prices.sort((a,b)=> a-b)
let twoChocolates=sorted[0]+sorted[1]
if(twoChocolates>money){
    return money
}else{
  return  money-twoChocolates
}
    
};