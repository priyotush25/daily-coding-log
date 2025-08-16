//  I am learning Programming to become a programmer
function longestWord(str) {
  let words = str.toLowerCase().split(" ");

  let maxWord = words[0];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxWord.length) {
      maxWord = words[i];
    }
  }

  return maxWord;
}

let result = longestWord(" I am learning Programming to become a programmer");
console.log(result);
