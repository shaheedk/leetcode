/**
 * @param {number} x
 * @return {number}
 */
const sumOfTheDigitsOfHarshadNumber=(x)=> {
    let sum = 0;
    let y = x;

    while (x > 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);
        sum += digit;
    }

    if (y % sum === 0) {
        return sum;
    } else {
        return -1;
    }
}
