let phones = [
  { price: 12000, barnd: "sumsung", model: "53xgb5" },
  { price: 2500, barnd: "sumsung", model: "53dgd5" },
  { price: 16000, barnd: "sumsung", model: "5ryt35" },
  { price: 25000, barnd: "sumsung", model: "53g5" },
];

function bestPhone(phones) {
  let min = phones[0];

  for (let num of phones) {
    if (num.price < min.price) {
      min = num;
    }
  }

  return min;
}

console.log(bestPhone(phones));
