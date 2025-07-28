
// 01. +, -, *, / practice 

let mum , result ;

num = 12;

result = 12+5;
result = 12-5;
result = 12*3;
result = 12/4;


console.log("the result is : " +result);


// 02. string to convert number
let strNum = "120";
let strNum2 = "120.45";


console.log(typeof parseInt(strNum));
console.log(typeof parseFloat(strNum2));


// 03. float number 
let floatNumber = 120.23424;

console.log(floatNumber.toFixed(2));

// isNan , isFinite
let nullNumber = NaN;
let isNanNumber = "123";


console.log(isNaN(NaN));
console.log(isNaN(isNanNumber));

