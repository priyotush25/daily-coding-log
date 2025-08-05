// string vs array

// string declare 4 way
// length
// index
// mutable and immutable

let name = "priyotush Paul";
let district = `Habiganj`;
let country = new String("Bangladesh");

console.log(name);
console.log(district);
console.log(country);

console.log(name.length);

console.log(name[0]);

// array - mutable
let fruits = ["apple", "banana", "mango", "cucumber"];

console.log((fruits[0] = "jackfruit"));
console.log(fruits);

// string - immutable
let sentence = "Hello world!";

sentence[2] = "B";

console.log(sentence);
