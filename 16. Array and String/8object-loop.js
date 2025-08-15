// 16_9 Loop an object and Ways to declare an Object

const mobile = {
  brand: "samsung",
  price: 30000,
  color: "Black",
  camera: "16mp",
  isNew: true,
};

console.log(mobile);

// object property
for (let items in mobile) {
  console.log(items);
}

// object property value
for (let key in mobile) {
  console.log(mobile[key]);
}

//

const property = Object.keys(mobile);

console.log(property);

for (const value of property) {
  console.log(value, ":", mobile[value]);
}
