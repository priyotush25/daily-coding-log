// let items = document.querySelectorAll(".item");
// for (let item of items) {
//   console.log(item.innerText);
// }

// let ul = document.querySelector(".items");

// let p = document.createElement("p");
// p.innerText = "this is a new paragraph";

// ul.prepend(p);
// ul.insertBefore("item", p);

// let heading = document.querySelector(".heading");
// heading.setAttribute("id", "newId");

// console.log(heading);
// console.log(heading.hasAttribute("id"));
// heading.removeAttribute("id");
// console.log(heading.getAttribute("class"));
// console.log(heading.className);

// heading.classList.add("highlight", "newClass");
// heading.classList.toggle("hello");

// console.log(heading);

// // style.property
// heading.style.color = "black";
// heading.style.backgroundColor = "orange";
// heading.style.padding = "10px";

// cssText
// heading.style.cssText =
"border: 4px solid red; background-color: lightblue; padding: 10px; border-radius: 5px";

//  getComputedStyle()
// let style = getComputedStyle(heading);
// console.log(style.color);
// console.log(style.background);
// console.log(style.border);
// console.log(style.borderRadius);

// let button = document.querySelector("#btn");
// let input = document.querySelector("#input");
// console.log(button);
// console.log(input);

// onclick
// button.onclick = function () {
//   console.log("Button Click");
// };

// onchange
// input.onchange = function () {
//   console.log("input here", this.value);
// };

// oninput
// input.oninput = function () {
//   console.log(this.value);
// };

// addEventListener
// btn.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(e.type);
// });

// value
let input = document.querySelector("#input");

function showName() {
  console.log(input.value);
}

// form validation

let email = document.querySelector("#email");
let pass = document.querySelector("#pass");

function validForm(e) {
  console.log(email.value);
  console.log(pass.value);
}
