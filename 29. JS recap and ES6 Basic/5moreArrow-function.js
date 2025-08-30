// discount
const discountOffer = (amount, rate) => (amount * rate) / 100;

console.log(discountOffer(200, 20));

// single parameter
const square = (x) => x * x;
console.log(square(5));

//multi line arrow function
const calculation = (x, y) => {
  const sum = x + y;
  const subtraction = x - y;
  const multiply = x * y;
  const divided = x / y;

  return sum, subtraction;
};

console.log(calculation(20, 5));
