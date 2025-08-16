// Find the friend with the smallest name.
function smallestName(names) {
  let smallName = names[0];

  for (let name of names) {
    if (names[0].length < name.length) {
      smallName = name;
    }
  }
  return smallName;
}

let result = smallestName(["rahim", "robin", "rafi", "ron", "rashed"]);
console.log(result);
