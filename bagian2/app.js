var combine = function (input1, input2) {
    return (typeof input1 === 'number' && typeof input2 === 'number')
        ? input1 + input2
        : input1.toString() + input2.toString();
};
var combineNumber = combine(14, 23);
console.log("🚀 ~ combineNumber:", combineNumber);
var combineString = combine('Dendra', 'Ardana');
console.log("🚀 ~ combineString:", combineString);
