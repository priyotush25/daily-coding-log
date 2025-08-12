// Admission Success
function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let pass = 0;
  let fail = 0;

  for (let num of marks) {
    if (num >= 50) {
      pass++;
    } else {
      fail++;
    }
  }

  return pass > fail;
}

console.log(willSuccess([]));
