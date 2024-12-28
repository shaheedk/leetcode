const isPalindrome = (x: number | string): boolean => {
    const str: string = x.toString();
    return str === str.split('').reverse().join('');
};
