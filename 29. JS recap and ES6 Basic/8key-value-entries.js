const employee = {
  name: "priyo",
  profession: "developer",
  salary: 20000,
  experience: 2,
};

// keys find
const keys = Object.keys(employee);
console.log(keys);

// values find
const values = Object.values(employee);
console.log(values);

// entries of object
const entires = Object.entries(employee);
console.log(entires);

// delete
delete employee.experience;
console.log(employee);

// update values
employee.salary = employee.salary + 5000;
console.log(employee);
