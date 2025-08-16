// count the number of vowels in a string.
function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let x of str) {
    if (vowels.includes(x.toLowerCase())) {
      count++;
    }
  }

  return count;
}

let result = countVowels("programinghero");
console.log(result);
