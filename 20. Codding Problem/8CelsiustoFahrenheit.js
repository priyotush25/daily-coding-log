// Celsius to Fahrenheit.
// °F = (°C * 9/5) + 32

function tempConversion(temp) {
  let fahrenheit = (temp * 9) / 5 + 32;
  return fahrenheit;
}

let result = tempConversion(5);
console.log("Fahrenheit :", result);
