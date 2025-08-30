// dynamic template string

function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;

  console.log(`Sum of ${num1} and ${num2} total = ${total}`);
}

sum(10, 30);

// multi line template string
const skills = `Html
Css
tailwind css
javascript
react js
firebase 
mongodb`;

console.log(skills);
