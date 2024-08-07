var calculate = function (n1, n2) {
    return n1 + n2;
};
var consoleDisplay = function (input) {
    console.log("🚀 ~ consoleDisplay ~ input:", input);
};
// Function as type menggunakan Function klasik
// variable functionAsType1 bisa menggunakan semua Function karena tidak ada ketentuan
var functionAsType1;
functionAsType1 = calculate;
// Function as type menggunakan Function Expression
// variable ini hanya mengizinkan fungsi yang sesuai dengan deklarasinya, dengan 2 params number, dan output number
var functionAsType2;
functionAsType2 = calculate;
// hasil akhir hanya console log saja, tidak undifined
consoleDisplay(calculate(12, 23));
console.log('-------------');
// bernilai undifined karena fungsi consoleDisplay hanya void saja, tidak ada nilai nyata
console.log("🚀 ~ console.log(consoleDisplay):", consoleDisplay(calculate(14, 23)));
console.log('-------------');
// karena tidak mencantumkan parameter, maka hanya menampilkan isi classnya
console.log("🚀 ~ consoleDisplay:", consoleDisplay);
console.log('-------------');
// hasil akhir akan undifined, karena fungsi consoleDisplay tidak bernilai
console.log("🚀 ~ consoleDisplay(234):", consoleDisplay(234));
console.log('-------------');
// hasil akhir akan undifined, karena fungsi consoleDisplay tidak mereturn
var result = consoleDisplay(calculate(12, 23));
console.log("🚀 ~ result:", result);
console.log('-------------');
console.log("🚀 ~ functionAsType1:", functionAsType1(2, 3));
console.log('-------------');
console.log("🚀 ~ functionAsType2:", functionAsType2(4, 10));
console.log('-------------');
