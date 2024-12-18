/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let answer = [];
    for (let i = 0; i < prices.length; i++) {
        let discounted = prices[i]; // Default is the original price
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                discounted = prices[i] - prices[j]; // Apply discount
                break; // Stop after the first discount is applied
            }
        }
        answer.push(discounted);
    }
    return answer;
};