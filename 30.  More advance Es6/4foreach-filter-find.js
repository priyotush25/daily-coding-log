const number = [10, 20, 30, 40, 50];

// forEach
number.forEach((x) => {
  console.log(x * 2);
});

// filter
let greaterThen = number.filter((x) => x > 30);

console.log(greaterThen);

// find
let firstEven = number.find((x) => x % 2 === 0);

console.log(firstEven);

// student
let students = [
  {
    id: 1,
    name: "abul",
    mark: 50,
  },
  {
    id: 1,
    name: "Nabil",
    mark: 85,
  },
  {
    id: 1,
    name: "Hridoy",
    mark: 95,
  },
  {
    id: 1,
    name: "Shuan",
    mark: 15,
  },
];

let goodStudents = students.filter((student) => student.mark > 80);
let goodStudent = students.find((student) => student.mark > 80);

console.log(goodStudents);
console.log(goodStudent);
