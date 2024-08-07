const combine = (input1: number|string, input2: number|string, resultConversion: 'as_number' | 'as_string'): number|string => {
    return (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as_number')
        ? +input1 + +input2
        : input1.toString() + ' ' + input2.toString()
}

const combineNumber = combine(14, 23, 'as_number')
console.log("🚀 ~ combineNumber:", combineNumber)

const combineMix = combine('14', '23', 'as_number')
console.log("🚀 ~ combineMix:", combineMix)

const combineString = combine('Dendra', 'Ardana', 'as_string')
console.log("🚀 ~ combineString:", combineString)