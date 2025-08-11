// javascript array and function conceptional session

// var, let, const

// array
// const numbers = [10, 20, 30, 40, 50];
// console.log(numbers);

// newArray
const newArray = [];
const fruits = ["apple", "mango", "cucumber", "Pineapple"];
for (const fruit of fruits) {
  newArray.push("eat " + fruit);
}

console.log(newArray);

// push and pop methods

// shift and unshift methods

// reverse method and use loop

// == using for loop
const reverseArr = ["apple", "mango", "cucumber", "Pineapple"];
const reverseNewArr = [];

for (let i = reverseArr.length - 1; i >= 0; i--) {
  reverseNewArr.push(reverseArr[i]);
}

console.log(reverseNewArr);

// == reverse use method
const person = ["rahim", "kairm", "juanhid", "asif"];

const result = person.reverse();

console.log(result);

// sorting array
