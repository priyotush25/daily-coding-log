/*function signature/sample */
function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }

  // gender difference
  if (person1.gender == person2.gender) {
    return false;
  }

  if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }

  return true;
}

console.log(
  validProposal(
    { name: "toya", gender: "female", age: 24 },
    { name: "bjoy", gender: "male", age: 32 }
  )
);
