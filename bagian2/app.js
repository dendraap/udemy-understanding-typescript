var count = function (n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input data types!');
    }
    return n1 + n2;
};
var a = 1;
var b = 2.5;
var result = count(a, b);
console.log("🚀 ~ result:", result);
