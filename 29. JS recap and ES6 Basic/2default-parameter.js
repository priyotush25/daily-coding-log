// add for default value use - 0
function num(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(total);
}

num(10);

// multiply for default value set - 1
function multiply(num1 = 1, num2 = 1) {
  const total = num1 * num2;
  console.log(total);
}

multiply(15);

// string for default value is empty string ""
function myName(fname = "", lname = "") {
  const fullName = fname + lname;
  console.log(fullName);
}

myName("priyotush ");
