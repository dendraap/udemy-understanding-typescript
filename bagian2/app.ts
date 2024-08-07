enum Type {NUMBER = 'number', STRING= 'string'}

const combine = (input1: number|string, input2: number|string, resultConversion: Type): number|string => {
    return (typeof input1 === Type.NUMBER && typeof input2 === Type.NUMBER || resultConversion === Type.NUMBER)
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString()
}

const combineNumber = combine(14, 23, Type.NUMBER)
console.log("🚀 ~ combineNumber:", combineNumber)

const combineMix = combine('14', '23', Type.NUMBER)
console.log("🚀 ~ combineMix:", combineMix)

const combineString = combine('Dendra', 'Ardana', Type.STRING)
console.log("🚀 ~ combineString:", combineString)
