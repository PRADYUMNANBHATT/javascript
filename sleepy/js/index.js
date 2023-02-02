"use strict";
const moon = document.getElementById("moon");
let star = document.getElementById("star");
let mountain = document.getElementById("mountain");
let scrolbtn = document.querySelector(".scrol-up-btn");
let sections = document.querySelectorAll("section");
let section1 = document.querySelector(".hero");

let value = [0, 1];
// function callbackSection(entries, observer) {
//   console.log(entries);
//   const [e] = entries;
//   if (!e.isIntersecting) return;
//   observer.unobserve(e.target);
// }
// const fiSeObv = new IntersectionObserver(callbackSection, Option);
// sections.forEach((e) => {
//   fiSeObv.observe(e);
// });

scrolbtn.addEventListener("click", function () {
  window.scrollTo(0, 0, { behavior: "smooth" });
});
window.addEventListener("scroll", function (e) {
  // e.preventDefault();

  value = [...value, Math.ceil(window.scrollY)];

  let vl = value.length;

  value[vl - 1] > value[vl - 2]
    ? setInterval(
        window.scrollTo(0, value[vl - 1] + 8, { behaviour: "smooth" }),
        8
      )
    : setInterval(
        window.scrollTo(0, value[vl - 1] - 1, { behaviour: "smooth" }),
        1
      );

  // setInterval(window.scrollTo(0, value), 1000);
  moon.style.left = window.scrollY * 0.01 + "rem";
  // ;
  window.scrollY < 600
    ? ((star.style.bottom = window.scrollY * 0.05 + "rem"),
      (mountain.style.top = window.scrollY * 0.05 + "rem"))
    : (mountain.style.zIndex = -1);
});

const carouselFn = async function () {
  const carousel = document.getElementById("carousel");
  const leftbtn = document.querySelector(".carousel-btn-left");
  const rightbtn = document.querySelector(".carousel-btn-right");
  let slide;

  let data;
  let daLa;
  let count = 0;
  const prevous = function () {
    count === 0 ? (count = daLa - 1) : count--;

    slidenow(count);
  };
  const Next = function () {
    count === daLa - 1 ? (count = 0) : count++;

    slidenow(count);
  };
  leftbtn.addEventListener("click", prevous);
  rightbtn.addEventListener("click", Next);
  data = await fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json);
  daLa = data.length;
  const slidenow = (count) => {
    slide.forEach(
      (e, i) => (e.style.transform = `translateX(${(i - count) * 100}%)`)
    );
  };

  // carousel.innerHTML = "";
  data.forEach((e, i) => {
    {
      carousel.insertAdjacentHTML(
        "beforeend",
        `  
<div
  class="slide"
   style="opacity: 1; transform: translateX(${(i - count) * 100}%)"
>
  <img
    src="${e.img}"
    srcset="
    ${e.img}
    "
    alt="carousel-img"
  />
  <div class="s4-title">Sleep better,<br />wake happier</div>
<div class="s4-description">
  <p>
    Explore sleep sounds, stories and meditations, to help you sleep
    better and wake up happier.
  </p>
</div>
</div>

`
      );
    }
  });
  slide = document.querySelectorAll(".slide");
};
const init = function () {
  carouselFn();
};
init();
