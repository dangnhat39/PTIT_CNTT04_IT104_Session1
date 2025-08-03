const sumArrays = (...arrays) => {
    return arrays.map(arr =>
        Array.isArray(arr)
            ? arr.reduce((sum, num) => sum + num, 0)
            : 0
    );
};

console.log(sumArrays([1, 2, 3], [4, 5], [10]));  // [6, 9, 10]
console.log(sumArrays([7, 8], [], [1, 1, 1]));    // [15, 0, 3]
