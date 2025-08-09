// variable var, let, const

// var - redeclare , reassign available
var name = "priyotush";

name = "Priyo Paul";

var name = 200;

console.log(name);

// let - not redeclare but reassign this variable
let num = 400;

num = 500;

console.log(num);

// const - not redeclare and reassign this variable

const firstName = "Priyotush";

console.log(firstName);

// data types
let strData = "priyotush";
let numData = 200;
let bool = true;
let nullData = null; //null type of object because this is a bug of js
let undefineData = undefined;

console.log(
  typeof strData +
    "\n" +
    typeof numData +
    "\n" +
    typeof bool +
    "\n" +
    typeof nullData +
    "\n" +
    typeof undefineData
);

// operator
// arithmetic operator
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// assignment operator
console.log((a = 20));
console.log((a += 2));
console.log((a -= 2));
console.log((a *= 2));
console.log((a /= 2));
console.log((a %= 2));

// comparison operator
a = 20;
b = 10;

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

// logical operator
a = 50;

if (a > 5 && a < 30) {
  console.log("condition is okay");
} else {
  console.log("condition its not okay");
}

// for, while

// array and objects
