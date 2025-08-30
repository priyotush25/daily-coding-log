// console.log("DOM Explore");

// let li = document.getElementsByTagName("li");

// console.log(li);

// for (let items of li) {
//   console.log(items.innerText);
// }

// let nerLi = (li[0] = "Node js");

// console.log(nerLi);

// let sections = document.getElementsByTagName("section");

// for (let section of sections) {
//   console.log(section);
//   section.style.border = "2px solid blue";
//   section.style.padding = "5px";
//   section.style.margin = "4px";
//   section.style.borderRadius = "10px";
//   section.style.backgroundColor = "yellow";
// }

// let box = document.getElementById("box-3");
// box.style.backgroundColor = "lightblue";

// DOM Traverse
// let child3 = document.querySelector("li");
// console.log(child3.parentNode);

// let parent = document.querySelector("ul");
// console.log(parent.children);
// console.log(parent.childNodes);
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild.innerText);

// let parent = document.querySelector("ul");
// console.log(parent.nextElementSibling);
// console.log(parent.previousElementSibling);

let parent = document.querySelector("#parent");

let li = document.createElement("li");

li.innerText = "Python";

parent.appendChild(li);

console.log(parent);
