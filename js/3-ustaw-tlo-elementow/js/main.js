const button = document.querySelector("button");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");

function setBackground() {
  p1.classList.toggle("bg-red");
  p2.classList.toggle("bg-yellow");
}

button.addEventListener("click", setBackground);
