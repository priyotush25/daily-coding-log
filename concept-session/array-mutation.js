// mutation methods

/*

push()
pop()
shift()
unshift()
sort()
reverse()

*/

// non mutation methods

/*

concat()
slice()
map()
filter()
fotEach()
find()
includes()

*/

// array of object
const persons = [
  {
    name: "priyotush",
    age: 25,
    isStudent: true,
  },
  {
    name: "sondip",
    age: 26,
    isStudent: false,
  },
  {
    name: "suronjon",
    age: 27,
    isStudent: true,
  },
];

for (person of persons) {
  console.log(
    `Name: ${person.name} , Age : ${person.age} , Student : ${person.isStudent}`
  );
}

// for in loop

const myInfo = {
  name: "piryo",
  age: 25,
  batch: 60,
};

for (x in myInfo) {
  console.log(myInfo[x]);
}
