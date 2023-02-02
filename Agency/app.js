"usestrict";
var pizza = document.querySelector(".pizza");
var nav = document.querySelector(".nav-link");
let navLi = document.querySelectorAll(".nav-link li");
pizza.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
pizza.classList.toggle("toggle");
setTimeout(function preloader() {
  let preloader = document.querySelector(".preloader-wrapper");
  preloader.style.display = "none";
}, 1000);
var cont = document.querySelector(".contact");
var inf = document.querySelector(".info1");
var homeHead = document.querySelector(".hero-content");
var abo = document.querySelector(".about");
var service= document.querySelector(".service");
function contact() {
  cont.style.display = "block";
  inf.style.display = "none";
  homeHead.style.display = "none";
  service.style.display="none";
  abo.style.display = "none";
}
function home() {
  cont.style.display = "none";
  inf.style.display = "block";
  homeHead.style.display = "block";
  service.style.display="none";
  abo.style.display = "none";
}
function about() {
  abo.style.display = "block";
  inf.style.display = "block";
  cont.style.display = "none";
  service.style.display="none";
  homeHead.style.display = "none";
}
function services() {
  abo.style.display = "none";
  inf.style.display = "none";
  cont.style.display = "none";
  service.style.display="block";
  homeHead.style.display = "none";
}
