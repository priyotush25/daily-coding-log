function evenNumber(numbers) {
  let num = [];
  for (number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
      num.push(number);
    }
  }
  return num;
}

const numbers = [10, 24, 13, 32, 17];
const result = evenNumber(numbers);

console.log(result);
