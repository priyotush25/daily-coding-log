let data;

data = 0; //falsy
data = ""; //falsy
data = " "; //truthy
data = null;
data = undefined;
data = [];
data = {};

data = false;
data = NaN;

if (data) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// logical not
if (!data) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// convert boolean

let x = 0;
if (!!x === true) {
  console.log("is boolean ");
}
