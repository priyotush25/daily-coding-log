let num = [2, 3, 4, 5, 6, 7, 8];

let double = num.map((x) => x * 2);
let square = num.map((x) => x * x);

console.log(square);

// map use string
let friends = ["Zaved", "Aved", "Pavel", "Novel"];

let length = friends.map((name) => name.length);
let upper = friends.map((name) => name[0].toUpperCase());

let check = friends.map((x, y) => {
  console.log(x, y);
});

console.log(check);
