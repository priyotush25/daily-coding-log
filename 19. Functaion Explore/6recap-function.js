// 19-6 Recap and conditional return of odd and even

function even(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const result = even(20);
console.log(result);
