function validContact(number) {
  if (typeof number !== "string") {
    return "Invalid: not string";
  }

  if (number === "") {
    return "Invalid: empty";
  }

  for (let i = 0; i < number.length; i++) {
    if (number[i] < "0" || number[i] > "9") {
      return "Invalid: must contain only digits";
    }
  }

  if (number.length !== 11) {
    return "Invalid: must be 11 digits";
  }

  if (number[0] !== "0" || number[1] !== "1") {
    return "Invalid: must start with 01";
  }

  return "Valid";
}

console.log(validContact("01712345678")); // ✅ Valid
console.log(validContact("01712 345678")); // ❌ Invalid: must contain only digits
console.log(validContact("01712abc678")); // ❌ Invalid: must contain only digits
console.log(validContact("12345678901")); // ❌ Invalid: must start with 01
