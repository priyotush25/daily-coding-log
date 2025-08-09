// 19-5 Function return and set return value to a variable

function price(price) {
  return (price += (price * 5) / 100);
}

const total = price(150);

console.log("total price with vat : ", total);
