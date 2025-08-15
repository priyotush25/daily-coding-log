let prices = [16000, 30000, 12000, 45000, 25000, 15000, 19000];

function getMin() {
  let min = prices[0];

  for (let num of prices) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

console.log(getMin(prices));
