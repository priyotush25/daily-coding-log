// Generate a random number between 10 to 20.
function randomNum() {
  let max = 20;
  let min = 10;

  let num = Math.floor(Math.random() * (max - min)) + min;

  return num;
}

let result = randomNum();
console.log(result);
