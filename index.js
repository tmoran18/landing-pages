const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", mobileNav);

function mobileNav() {
  navMenu.className === "nav-menu"
    ? (navMenu.className += " mobile")
    : (navMenu.className = "nav-menu");
}

function myFunction(x) {
  if (x.matches) {
    navMenu.className = "nav-menu";
  }
}

const x = window.matchMedia("(min-width: 600px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
