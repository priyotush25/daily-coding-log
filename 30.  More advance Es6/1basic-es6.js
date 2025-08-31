// var , let , const
let name = "priyo";
name = "priyotush";

console.log(name);

const fname = "priyo";
// fname = "priyotush";

console.log(fname);

// default parameter

function add(a = 0, b = 0) {
  console.log(a + b);
}
add(10);

function multiply(a = 1, b = 1) {
  console.log(a * b);
}
multiply(10);

// template string
let user = "priyotush";
let age = 24;

console.log(`my name is ${user} and i am ${age} old`);

// arrow function
let divided = (a, b) => console.log(a / b);
divided(20, 4);

// spread operator
let num = [10, 20, 30, 40];
let newNum = [...num, 60, 70, 80];

console.log(newNum);

// rest operator

// destructuring
let student = {
  Sname: "priyotush",

  mark: 3.4,
  age: 24,
};

let { mark } = student;
