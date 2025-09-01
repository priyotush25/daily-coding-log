// callback function
function students(name) {
  console.log("Hello", name());
}

function name() {
  return "priyotush";
}

students(name);
