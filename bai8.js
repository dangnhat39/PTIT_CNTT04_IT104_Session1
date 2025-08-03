const insertArray = (a1, a2, pos) => {
    if (!Array.isArray(a1) || !Array.isArray(a2) || pos < 0 || pos > a1.length)
        return console.log("Lỗi: Dữ liệu đầu vào không hợp lệ.");

    const result = [...a1.slice(0, pos), ...a2, ...a1.slice(pos)];
    console.log(result);
    return result;
};
insertArray([1, 2, 3, 7, 8], [4, 5, 6], 3);
insertArray(['a', 'b', 'e', 'f'], ['c', 'd'], 2);
