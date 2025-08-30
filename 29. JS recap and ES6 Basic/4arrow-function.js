// function
function add(num1, num2) {
  console.log(num1 + num2);
}

add(5, 2);

// function expression
const addition = function addition(num1, num2) {
  console.log(num1 + num2);
};

addition(30, 20);

// arrow function
const add2 = (num1, num2) => console.log(num1 + num2);

add2(20, 5);

const multiply = (a, b) => console.log(a * b);
multiply(4, 5);
