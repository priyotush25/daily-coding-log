//** array learning **

// push(), pop(), shift(), unshift();
let result;
let num1 = [400, 500, 600];
let numbers = [10, 20, 30, 40, 50];

// numbers.push(100);
// numbers.pop();

// numbers.shift();
// numbers.unshift(100, 200, 300, 400);

// result = numbers.concat(num1);

// result = numbers.slice(0, 2 + 1); - crate new array but cant modify original array
// result = numbers.splice(0, 3, 100, 200, 500); - crate new array and modify original array

// result = numbers.includes(20); - true or false

// forEach() methods (this method not create new array and its not return )
console.log("forEach methods explain");
let numbersEach = [10, 20, 30, 40, 50];

numbersEach.forEach(function (x) {
  console.log(x * 2);
});

// map() methods (crate new array and return)
console.log("map methods explain");
let numbersMap = [10, 20, 30, 40, 50];
let resultMap = numbersMap.map(function (x) {
  return x * 3;
});

console.log(resultMap);

// filter() method
console.log("filter methods explain");

let numfilter = [10, 15, 30, 45, 60];

let resultFilter = numfilter.filter(function (x) {
  return x % 2 == 0;
});

console.log(resultFilter);

// reduce() methods
// array.reduce(function (accumulator, currentValue) {
//    return new accumulator
// }, initialValue);

console.log("reduce method");
let resultReduce = numbers.reduce(function (sum, value) {
  return (sum += value);
}, 0);

console.log(resultReduce);

// reverse() methods

let reverseResult = numbers.reverse();
console.log(reverseResult);
