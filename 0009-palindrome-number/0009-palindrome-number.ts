function isPalindrome(x: number): boolean {
     const str = x.toString();
    return str === str.split('').reverse().join('');
};