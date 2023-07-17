let burger = document.getElementById("hi");
let navburger = document.getElementById("bye");

let nav = document.getElementById("nav");

function toggleOn() {
  nav.style.display = "block";
}

function toggleOff() {
  nav.style.display = "none";
}

burger.addEventListener("click", toggleOn);
navburger.addEventListener("click", toggleOff);
