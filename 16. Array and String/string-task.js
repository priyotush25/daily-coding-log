// Task-1: Count how many times a string has the letter a

let myStr = "Count how many times a string has the letter";

let item = myStr.length;
let count = 0;

for (let i = 0; i < item; i++) {
  if (myStr[i] == "a") {
    count++;
  }
}
console.log(count);
