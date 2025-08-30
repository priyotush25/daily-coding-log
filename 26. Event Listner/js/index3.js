let commentArea = document.querySelector("#comment-area");
let commentBox = document.querySelector("#comment-box");
let commentBtn = document.querySelector("#comment-btn");

commentBtn.addEventListener("click", function () {
  let message = commentBox.value;

  let p = document.createElement("p");
  p.classList.add("comment");
  p.innerText = message;
  commentArea.appendChild(p);

  commentBox.value = "";
});

// mouseover and mouseout
let mickyBtn = document.querySelector("#micky");

mickyBtn.addEventListener("mouseover", function () {
  console.log("mouseover");
});

mickyBtn.addEventListener("mouseout", function () {
  console.log("mouseout");
});

// keyup and down
let inputText = document.querySelector("#input-text");
let deleteBtn = document.querySelector("#delete-btn");

inputText.addEventListener("keyup", function (e) {
  let msg = e.target.value;
  if (msg === "delete") {
    console.log("delete typed");
  }
});
