const checkParity = (a) => {
    if (typeof a !== 'number' || isNaN(a)) {
        return `${a} is not a number`;
    }
    return a % 2 == 0
        ? `${a} is an even number`
        : `${a} is an odd number`
};

console.log(checkParity("abc"));
console.log(checkParity(10));
console.log(checkParity(7));
console.log(checkParity(NaN));