let section = document.querySelector("#section");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// child section
child.addEventListener("click", function (e) {
  console.log(child.innerText);

  e.stopPropagation();
});

// parent section
parent.addEventListener("click", function (e) {
  console.log(parent.innerText);
  e.stopImmediatePropagation();
});

// body section
section.addEventListener("click", function () {
  console.log(section.innerText);
});

// event delegate

// let items = document.getElementsByClassName("item");

// for (let item of items) {
//   item.addEventListener("click", function (e) {
//     console.log(e.target.parentNode.removeChild(e.target));
//   });
// }

// add new item
let addButton = document.querySelector("#add-btn");

addButton.addEventListener("click", function () {
  let ulItems = document.getElementsByTagName("ul");

  let newItem = document.createElement("li");

  newItem.innerText = "new item";

  newItem.classList.add("item");

  ulItems[0].appendChild(newItem);
});

let items = document.querySelector("#item-list");

items.addEventListener("click", function (e) {
  console.log(e.target.parentNode.removeChild(e.target));
});

// name add
let nameInput = document.querySelector("#name-input");
let nameBtn = document.querySelector("#name-btn");
let nameAdd = document.querySelector("#name-add");

nameBtn.addEventListener("click", function () {
  let h2 = document.createElement("h2");
  h2.innerText = nameInput.value;
  h2.classList.add("item");
  nameAdd.appendChild(h2);
});
