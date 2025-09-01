if (true) {
  const data = 56;
  console.log(data);
}

// console.log(data);

function say() {
  let name = "Hello";
  console.log(name);
}

// console.log(name);
say();

// hoisting
{
  console.log(doMath(5, 7));
}

function doMath(a, b) {
  return a + b;
}

let name = "Priyotush";
console.log(name);
