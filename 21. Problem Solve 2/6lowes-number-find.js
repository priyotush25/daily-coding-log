// Find the lowest number in the array below.

function lowestNum(arr) {
  let lowest = arr[0];

  for (let num of arr) {
    if (num < lowest) {
      lowest = num;
    }
  }
  return lowest;
}

let result = lowestNum([167, 190, 120, 165, 137]);
console.log(result);
