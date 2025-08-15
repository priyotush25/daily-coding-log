// 20-3 Check whether a year is a Leap Year or not

function leapYear(year) {
  if (year % 4 == 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYear(2025));
