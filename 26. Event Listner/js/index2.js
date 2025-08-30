// option 2 for event handler
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3
let makeBlue = document.querySelector("#make-blue");

makeBlue.onclick = function () {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
};

let newPurple = document.querySelector("#make-purple");
newPurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// option 4
let makeGreen = document.querySelector("#make-green");

makeGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

let makeGold = document.querySelector("#make-gold");

makeGold.addEventListener("click", function () {
  document.body.style.backgroundColor = "gold";
});

// update text
let title = document.querySelector("#title-btn");

title.addEventListener("click", function () {
  let heading = document.querySelector("#page-title");

  heading.innerText = "Updated Pages Title";
});

// login user
let loginButton = document.querySelector("#login-btn");
console.log(loginButton);

loginButton.addEventListener("click", function () {
  let userInfo = document.querySelector("#user-info");
  userInfo.innerText = "User Login Successfully";
});

// update input value
let nameText = document.querySelector("#name-text");
let inputText = document.querySelector("#input-text");
let updateBtn = document.querySelector("#update-btn");

updateBtn.addEventListener("click", function () {
  let value = inputText.value;
  nameText.innerText = value;
});
