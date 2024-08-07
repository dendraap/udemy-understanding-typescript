const combine = (input1: number|string, input2: number|string): number|string => {
    return (typeof input1 === 'number' && typeof input2 === 'number')
        ? input1 + input2
        : input1.toString() + input2.toString()
}

const combineNumber = combine(14,23)
console.log("🚀 ~ combineNumber:", combineNumber)

const combineString = combine('Dendra', 'Ardana')
console.log("🚀 ~ combineString:", combineString)
