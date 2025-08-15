// Feet ot Inch convert

function feetConverter(num) {
  const feet = parseInt(num / 12);
  const inch = num % 12;

  const result = feet.toFixed() + " Feet " + inch + " Inch";
  return result;
}

const value = feetConverter(80);
console.log(value);

// mile to kilometer
function mileTokilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

console.log(mileTokilometer(5));
