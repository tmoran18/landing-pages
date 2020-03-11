// var navMenu = document.querySelector(".nav-menu");
// var hamburger = document.querySelector(".hamburger-menu");

// hamburger.addEventListener("click", mobileNav);

// function mobileNav() {
//   if (navMenu.className === "nav-menu") {
//     navMenu.className += " mobile";
//     console.log("clicked");
//   } else {
//     navMenu.className = "nav-menu";
//     console.log("clicked R");
//   }
// }

// function myFunction(x) {
//   if (x.matches) {
//     navMenu.className = "menu-Menu";
//   }
// }

var x = window.matchMedia("(min-width: 600px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes
console.log(x);
window.addEventListener("onchange", function() {
  console.log(test);
});
