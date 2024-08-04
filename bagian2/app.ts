const count = (n1: number, n2: number): number => {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Incorrect input data types!')
    return n1+n2
}

const a = 1
const b = 2.5

const result = count(a,b)
console.log("🚀 ~ result:", result)
