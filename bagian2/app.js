var calculate = function (n1, n2) {
    return n1 + n2;
};
var consoleDisplay = function (input) {
    console.log("🚀 ~ consoleDisplay ~ input:", input);
};
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
