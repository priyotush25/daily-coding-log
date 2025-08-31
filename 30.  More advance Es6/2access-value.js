// access value in object and array
const student = {
  name: "priyotush",
  mark: 50,
  1: 40,
  skill: {
    web: "Html",
    pro: "javascript",
  },
};

console.log(student);
console.log(student.name);
console.log(student.mark);
// console.log(student.1);

console.log(student[1]);
console.log(student.skill.web);
console.log(student.skill.pro);
console.log(student.skill?.style);
