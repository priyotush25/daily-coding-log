// 18_3: Reverse an Array: 3 Techniques Explained (for loop, unshift, reverse method)

// reverse use unshift()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const reverse = [];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  reverse.unshift(numbers[i]);
}

console.log(reverse);
