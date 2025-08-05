// types conversion 


let num = 10;
let num2 = "5";

// + number covert sting
console.log(num+num2);


// - string convert number
console.log(num-num2);


// * string convert number
console.log(num*num2);


// / sting convert number
console.log(num/num2);




// Explicit Types Conversion (String(), Number(), Boolean())

// String() conversion
let strNum = 123;

let result = String(strNum)
console.log(typeof result);


// Number() conversion 
strNum = "123";

result = Number(strNum);
console.log(typeof result);

// when number convert fail then NaN
let num3 = "abc";
console.log(Number(num3));


// Boolean Conversion
let boolNum;

boolNum = "";
boolNum = "Hello";
boolNum = 0;
boolNum = 123;

console.log(Boolean(boolNum));
