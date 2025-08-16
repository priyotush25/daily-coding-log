// selection parent element
let child = document.getElementById("child");

console.log(child.parentElement);

// selection child
let parent = document.getElementById("list");

console.log(parent.children);

console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

// selection sibling element
let second = document.getElementById("second");

console.log(second);

console.log(second.previousElementSibling);
console.log(second.nextElementSibling);
