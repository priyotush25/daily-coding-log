function oddAverage(numbers) {
  let oddNum = [];
  for (const num of numbers) {
    if (num % 2 == 1) {
      oddNum.push(num);
    }
  }
  let sum = 0;
  for (const num of oddNum) {
    sum = sum + num;
  }

  let len = oddNum.length;
  return (result = sum / len);
}

console.log(oddAverage([42, 13, 58, 65, 81, 96, 7]));
