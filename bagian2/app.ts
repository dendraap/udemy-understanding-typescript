const calculate = (n1: number, n2: number): number => {
    return n1 + n2
}

const consoleDisplay = (input: number): void => {
    console.log("🚀 ~ consoleDisplay ~ input:", input)
}

const calculateAndHandle = (n1: number, n2: number, cb: (num: number) => void ) => {
    const result = n1 + n2
    cb(result)
}

// Function as type menggunakan Function klasik
// variable functionAsType1 bisa menggunakan semua Function karena tidak ada ketentuan
let functionAsType1: Function;
functionAsType1 = calculate

// Function as type menggunakan Function Expression
// variable ini hanya mengizinkan fungsi yang sesuai dengan deklarasinya, dengan 2 params number, dan output number
let functionAsType2: (a: number, b: number) => number
functionAsType2 = calculate

// hasil akhir hanya console log saja, tidak undifined
consoleDisplay(calculate(12,23))
console.log('-------------')

// bernilai undifined karena fungsi consoleDisplay hanya void saja, tidak ada nilai nyata
console.log("🚀 ~ console.log(consoleDisplay):", consoleDisplay(calculate(14,23)))
console.log('-------------')

// karena tidak mencantumkan parameter, maka hanya menampilkan isi classnya
console.log("🚀 ~ consoleDisplay:", consoleDisplay)
console.log('-------------')

// hasil akhir akan undifined, karena fungsi consoleDisplay tidak bernilai
console.log("🚀 ~ consoleDisplay(234):", consoleDisplay(234))
console.log('-------------')

// hasil akhir akan undifined, karena fungsi consoleDisplay tidak mereturn
const result = consoleDisplay(calculate(12,23))
console.log("🚀 ~ result:", result)
console.log('-------------')

console.log("🚀 ~ functionAsType1:", functionAsType1(2,3))
console.log('-------------')

console.log("🚀 ~ functionAsType2:", functionAsType2(4,10))
console.log('-------------')

calculateAndHandle(10,20, (result) => {
    console.log("🚀 ~ calculateAndHandle ~ result:", result)
})
console.log('-------------')

// menghasilkan undifined, karena fungsi calculateAndHandle memiliki callback void, tidak mengembalikan nilai asli
const resultCB = calculateAndHandle(12,23, (result) => {})
console.log("🚀 ~ resultCB:", resultCB)
console.log('-------------')
