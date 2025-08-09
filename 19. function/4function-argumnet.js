// 19-4 How Function works and argument vs parameters

// double number function
function doubleInt(number) {
  const doubled = number * 2;
  console.log(number, doubled);
}

doubleInt(15);

// difference number
function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(diff);
}

let price = 80;
let discount = 25;

difference(price, discount);
