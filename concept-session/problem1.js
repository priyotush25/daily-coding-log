// cubeNumber()
// function cubeNumber(number) {
//   if (!isNaN(number)) {
//     return number ** 3;
//   } else {
//     return "Please Input Correct Number";
//   }
// }

// console.log(cubeNumber(6));

// match finder
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide two valid strings";
  }

  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}

console.log(matchFinder("Peter Parker", "pet"));

// sortMaker

// যদি কোনো একটি উপাদান নেগেটিভ হয় → return "Invalid Input"

// যদি দুইটি উপাদান সমান হয় → return "equal"

// নইলে দুইটিই পজিটিভ হলে → বড় থেকে ছোট ক্রমে sort করে return করবে

function sortMaker(arr) {
  if (!Array.isArray(arr) || arr.length !== 2) {
    return "Invalid Input";
  }

  let [a, b] = arr;

  if (a === b) {
    return "equal";
  }

  if (a > 0 && b > 0) {
    arr.sort((a, b) => {
      return a - b;
    });
  }
}

console.log(sortMaker([4, 3]));
