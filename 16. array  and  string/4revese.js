// 16_4 Reverse a String in Three different  ways

// for loop use - user reverse string
// for of loop - use reverse string
// split() , reverse(), join() - use reverse string

let profession = "Web Developer";

// use for loop
let reverse = "";

for (var i = 0; i < profession.length; i++) {
  reverse = profession[i] + reverse;
}
console.log(reverse);

// use for of
let emptyStr = "";
for (let word of profession) {
  emptyStr = word + emptyStr;
}

console.log(emptyStr);

// use methods

let splitArry = profession.split("").reverse().join("");

console.log(splitArry);
