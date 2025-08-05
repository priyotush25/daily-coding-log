// 16_8 Keys, Values, nested objects and delete

const computer = {
  brand: "Asus",
  price: 45000,
  processor: "intel",
  ssd: 512,
  monitor: "HP",
};

// property
const keys = Object.keys(computer);
console.log(keys);
console.log(keys[0]);
console.log(keys[1]);

// value
const value = Object.values(computer);
console.log(value);
console.log(value[0]);
console.log(value[4]);

// delete property
delete computer.monitor;
console.log(computer);

// delete property value
console.log("delete value : ", delete value[0]);
console.log(value);
