function averagePhone(phones) {
  let totalPhone = phones.length;
  let totalPrice = 0;

  for (let i = 0; i < phones.length; i++) {
    totalPrice += phones[i].price;
  }

  let averagePrice = Math.round(totalPrice / totalPhone);
  return averagePrice;
}

let result = averagePhone([
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
]);
console.log(result);
