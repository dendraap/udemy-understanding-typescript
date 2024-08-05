const count = (n1: number, n2: number, showResult: boolean, resultPhrase: string): number | void => {
    const result = n1+n2;
    return (typeof n1 !== 'number' || typeof n2 !== 'number')
        ? (() => {throw new Error('Incorrect data types!')}) ()
        : showResult 
            ? (console.log(resultPhrase, result), undefined) 
            : result
};

const a = 1;
const b = 2.5;
const showResult = true;
const resultPhrase = 'Result: ';

const last_result = count(a,b, showResult, resultPhrase);