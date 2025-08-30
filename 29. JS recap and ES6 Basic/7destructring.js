// destructing
const { name, price, quantity } = { name: "shirt", price: 500, quantity: 6 };

console.log(name, price, quantity);

// array destructuring
const number = [10, 20, 40, 50, 60];

const [first, second] = number;

console.log(first, second);
