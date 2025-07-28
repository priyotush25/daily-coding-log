let num = 3.14159;

//toFixed 
console.log(num.toFixed(2));
console.log(num.toFixed(4));
console.log(num.toFixed(0));


// toString
console.log(typeof num);
console.log(typeof num.toString());


// parseInt and parseFloat
let str1 = "25";
let str2 = "432.25";

console.log(parseInt(str1));
console.log(parseFloat(str2));

//isNan and Nan
console.log(isNaN("hello"));
console.log(isNaN("123"));

console.log(isNaN(NaN));


// isInteger
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));