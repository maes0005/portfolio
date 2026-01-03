console.log("loaded instruction...");

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const overlay = document.querySelector("#overlay");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
