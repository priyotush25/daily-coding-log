// 16_7 Multiple ways to get & set object properties

const person = {
  name: "Piryotush Paul",
  age: 25,
  profession: "web developer",
  salary: 25000,
  married: false,
  skill: ["Html", "Css", "JavaScript"],
};

// dot notion access object property
console.log(person.name);
console.log(person.skill[0]);

// bracket notation access object property
console.log(person["profession"]);
console.log(person["married"]);

// property value change
console.log((person.profession = "backend developer"));
console.log(person.skill.push("React Js"));
console.log((person.skill[0] = "HTML 5"));

console.log(person);
