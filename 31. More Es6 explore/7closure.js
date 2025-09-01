function counter() {
  let count = 10;
  return function innerFun(user) {
    count = count + 1;
    console.log(user, count);
  };
}

let output = counter();

let rahim = counter();

rahim("Rahim function ");
rahim("Rahim function ");
rahim("Rahim function ");
rahim("Rahim function ");
