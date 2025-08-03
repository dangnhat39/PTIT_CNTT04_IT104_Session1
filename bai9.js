const merge = (a, b) => [...a, ...b].sort((x, y) => x - y);
function mergeSorted(a, b) {
    let i = 0, j = 0, result = [];
    while (i < a.length && j < b.length) {
        result.push(a[i] < b[j] ? a[i++] : b[j++]);
    }
    return result.concat(a.slice(i), b.slice(j));
}
mergeSorted([1, 2, 3, 5, 9], [4, 6, 7, 8]);