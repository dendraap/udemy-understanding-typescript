var Type;
(function (Type) {
    Type["NUMBER"] = "number";
    Type["STRING"] = "string";
})(Type || (Type = {}));
var combine = function (input1, input2, resultConversion) {
    return (typeof input1 === Type.NUMBER && typeof input2 === Type.NUMBER || resultConversion === Type.NUMBER)
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString();
};
var combineNumber = combine(14, 23, Type.NUMBER);
console.log("🚀 ~ combineNumber:", combineNumber);
var combineMix = combine('14', '23', Type.NUMBER);
console.log("🚀 ~ combineMix:", combineMix);
var combineString = combine('Dendra', 'Ardana', Type.STRING);
console.log("🚀 ~ combineString:", combineString);
