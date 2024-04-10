const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

// Open The navBar
open.addEventListener("click", () => {
  nav.classList.add("right-0");
});

// Close The navBar
close.addEventListener("click", () => {
  nav.classList.remove("right-0");
});

// Get current year
const year = document.querySelector("#year");
const getYear = new Date().getFullYear();
year.innerText = getYear;
