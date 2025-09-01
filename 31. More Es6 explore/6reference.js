let a = 10;
let b = 15;

function num(a, b) {
  a = 0;
  b = b * 2;

  console.log(a + b);
}

num(a, b);

console.log(a, b);

// non primitive data
let roton = { blance: 1200 };
let topon = { blance: 560 };

function math(roton, topon) {
  roton.blance = 0;
  topon.blance = topon.blance * 2;
  console.log(roton.blance + topon.blance);
}

math(roton, topon);

console.log(roton, topon);

// argument
function add() {
  console.log(arguments);
  let num = [...arguments];
  console.log(num);
}

add(4, 5, 6, 7);
