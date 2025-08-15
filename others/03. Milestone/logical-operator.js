let age = 25;
let hasId = true;

// && operator
if (age && hasId) {
  console.log("Your are allowed to enter");
} else {
  console.log("Entry denied ");
}

// || OR operator
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Your can rest today");
} else {
  console.log("You can to work");
}

// ! Not Operator
let isLoginIn = false;

if (!isLoginIn) {
  console.log("You can login first");
}

// Grade calculation
let mark = 82;

if (mark >= 80 && mark <= 100) {
  console.log("Grade A+");
} else console.log("Grade less then A+");

// verified user
let emailVerified = true;
let validPassword = true;

if (!emailVerified && validPassword) {
  console.log("User fully Verified");
}
console.log("User not verified");

// Login Logic
let user = "admin";
let password = "1234";

if (user === "admin" && password === "123") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

//weather app
let isRaining = false;
let isCloudy = true;

if (isRaining || isCloudy) {
  console.log("you can take umbrella");
}

// permission
let isPermission = false;

if (!isPermission) {
  console.log("Access denied");
}
