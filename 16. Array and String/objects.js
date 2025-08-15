// object looping

let computer = {
  brand: "Asus",
  price: 45900,
  cpu: "intel",
  color: "blue",
};

let keys = Object.keys(computer);

for (let items of keys) {
  console.log(items, computer[items]);
}

console.log(computer["brand"]);
