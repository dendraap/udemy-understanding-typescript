var combine = function (input1, input2, resultConversion) {
    return (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as_number')
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString();
};
var combineNumber = combine(14, 23, 'as_number');
console.log("🚀 ~ combineNumber:", combineNumber);
var combineMix = combine('14', '23', 'as_number');
console.log("🚀 ~ combineMix:", combineMix);
var combineString = combine('Dendra', 'Ardana', 'as_string');
console.log("🚀 ~ combineString:", combineString);
