const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function currentSalary(employees) {
  let totalSalary = 0;

  for (let employee of employees) {
    let total = employee.starting + employee.increment * employee.experience;
    totalSalary += total;
  }

  let monthlySalary = (totalSalary / 12).toFixed(2);

  return monthlySalary;
}

let result = currentSalary(employees);
console.log(result);
