// 19-7 Different types of parameters for a function

function strFun(str) {
  console.log(str, str.length);
}

strFun("Bangladesh");

// boolean parameter
function boolFun(bool, num) {
  if (bool === true) {
    const result = num * 2;
    return result;
  } else {
    const result = num * 5;
    return result;
  }
}

console.log(boolFun(true, 10));

console.log(boolFun(false, 10));
