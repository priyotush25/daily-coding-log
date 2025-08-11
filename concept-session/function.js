// normal function
function person(name) {
  console.log(name);
}

person("priyotush paul");

// return with function
function stundent(name) {
  return name;
}

const result = stundent("priyo paul");
console.log(result);

// number find function
let numbers = [10, 20, 300, 40, 5, 200];

function findNumber(num) {
  for (let number of numbers) {
    if (number === num) {
      return "number is found";
    } else {
      return "number is not found";
    }
  }
}

console.log(findNumber(100));

// anonymous function
// সাধারণত আমরা যখন ফাংশন বানাই তখন নাম দেই — যেমন function myFunc() {}
// কিন্তু Anonymous Function-এ কোনো নাম থাকে না, শুধু ফাংশনের বডি থাকে।

// এভাবে আলাদা করে লিখলে কাজ করবে না, কারণ ফাংশনের নাম নেই।
// তাই সাধারণত Anonymous Function আমরা variable বা callback এ ব্যবহার করি।

let greet = function () {
  console.log("Hello Bangladesh!");
};

greet();

// arrow function
let hello = () => {
  console.log("Hello World!");
};

hello();

// number sort

let sortNumbers = numbers.sort((a, b) => {
  return a - b;
});
console.log(sortNumbers);
