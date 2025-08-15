// 18_2: Traverse Array using for, while, and for-of loop in JavaScript

// use for loop
const fruits = ["Apple", "Banana", "Cucumber", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const numbers = [20, 30, 40, 50, 60, 70];

for (let j = 0; j < numbers.length; j++) {
  console.log(numbers[j]);
}

// use while loop

const prices = [50, 70, 90, 70, 45];

let n = 0;
while (n < prices.length) {
  console.log("price : ", prices[n]);
  n++;
}
