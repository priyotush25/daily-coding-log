// spread operator
const number = [10, 20, 30, 40, 50];

const number2 = [...number];
number2.push(6);

console.log(number);
console.log(number2);

// merge array
const num1 = [30, 40, 50];
const num2 = [60, 70, 80];

const total = [...num1, ...num2];
console.log(total);

// employee
const person = { name: "priyo", age: 25 };
const employee = { profession: "developer", ...person };

console.log(employee);
