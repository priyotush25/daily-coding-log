// repeated number

function repeatedNum(numbers, search) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == search) {
      count++;
    }
  }

  return count;
}

let result = repeatedNum([5, 6, 11, 12, 98, 5], 5);
console.log(result);
