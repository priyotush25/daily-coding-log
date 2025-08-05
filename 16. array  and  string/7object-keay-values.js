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

// value
const value = Object.values(computer);
console.log(value);

// delete property
delete computer.monitor;
console.log(computer);
