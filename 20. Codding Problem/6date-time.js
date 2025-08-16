let now = new Date();

// get methods
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.getMilliseconds());
console.log(now.getTime());

// set Methods
let d = new Date();
console.log(d.setFullYear(2040));
console.log(d.setMonth(0));
console.log(d.setDate(10));
console.log(d.setHours(4));
console.log(d.setMinutes(30));

// date formatting
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
