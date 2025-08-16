// DOM Manipulation Methods
const newDiv = document.createElement("div");
newDiv.textContent = "New Div Create";
document.body.appendChild(newDiv);

// textContent
let para = document.querySelector("p");
para.textContent = "update text";

console.log(para);

//
let para2 = document.getElementById("para2");
para2.style.cssText =
  "color: blue; font-size: 18px; background: red; padding: 10px";
console.log(para2);
