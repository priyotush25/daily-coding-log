const employee = {
  name: "priyo",
  profession: "developer",
  salary: 20000,
  experience: 2,
};

for (let key in employee) {
  const value = employee[key];
  console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys);

for (let key of keys) {
  const value = employee[key];
  console.log(value);
}
