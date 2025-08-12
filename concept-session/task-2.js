// task-2 sum of array
function sumOfarray(arr) {
  let sum = 0;

  if (Array.isArray(arr) == false) {
    return "Invalid";
  }

  for (let num of arr) {
    if (typeof num !== "number") {
      return "Invalid";
    }
    sum += num;
  }

  return sum;
}

let result = sumOfarray(10);
console.log(result);
