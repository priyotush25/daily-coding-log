let a = 5;
let b = 7;

// swap value
let temp = a;

a = b;
b = temp;

console.log("a : ", a, "b : ", b);

// swap use destructure
let x = 10;

let y = 15;

[y, x] = [x, y];

console.log(x, y);
