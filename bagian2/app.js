var count = function (n1, n2, showResult, resultPhrase) {
    var result = n1 + n2;
    return (typeof n1 !== 'number' || typeof n2 !== 'number')
        ? (function () { throw new Error('Incorrect data types!'); })()
        : showResult
            ? (console.log(resultPhrase, result), undefined)
            : result;
};
var a = 1;
var b = 2.5;
var showResult = true;
var resultPhrase = 'Result: ';
var last_result = count(a, b, showResult, resultPhrase);
