// 19-8 Sum of all numbers in an array using function

function sumOfNumber(numbers) {
  let sum = 0;
  for (num of numbers) {
    sum = sum + num;
  }
  return sum;
}

const numbers = [10, 20, 30, 40, 50];

const result = sumOfNumber(numbers);
console.log("Then sum of number : ", result);
