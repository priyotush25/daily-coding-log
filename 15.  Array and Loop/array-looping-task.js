// Write a JavaScript code to reverse the array colors without using the reverse method.
const colors = ["red", "blue", "green", "yellow", "orange"];

console.log(colors.reverse());

// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber = [];

for (let i = 0; i < numbers.length; i++) {
  let even = numbers[i];
  if (even % 2 == 0) {
    evenNumber.push(even);
  }
}

console.log(evenNumber);

// Use a for...of loop to concatenate all the elements of an array into a single string.
var temStr = ["Tom", "Tim", "Tin", "Tik"];
let newStr;
for (let srt of temStr) {
  console.log(srt);
}
