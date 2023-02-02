"use strict";

const carousel = document.querySelector(".carousel");
const btnlft = document.querySelector(".btnlft");
const btnrgt = document.querySelector(".btnrgt");
const fe_prd = document.getElementById("feature-prd");

const slider = async function (e) {
  let data = await fetch("./data/data.json")
    .then((responce) => responce.json())
    .then((data) => data.slider);

  let count = data.length - 1;

  let previous = function () {
    count === 0 ? (count = data.length - 1) : count--;
    carousel.innerHTML = "";
    slide(count);
  };
  let next = function () {
    count === data.length - 1 ? (count = 0) : count++;
    carousel.innerHTML = "";
    slide(count);
  };
  btnlft.addEventListener("click", previous);
  btnrgt.addEventListener("click", next);

  const slide = function () {
    data.forEach((element, i) => {
      const die = `  <div class="slide"> 
   
    <img
      src="${element.img}"  style='transform:translateX(${(count - i) * 100}%)'
      alt="hero-img"
      class=" img-fluid"
    />

  </div>`;

      carousel.insertAdjacentHTML("beforeend", die);
    });
  };
  slide();
};
const fetureProduct = async function () {
  const data = await fetch("./data/data.json")
    .then((responce) => responce.json())
    .then((data) => data.featured_product);
  data.forEach((e) => {
    fe_prd.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="product-box" id="${e.id}" onClick="showProduct(this.id)">
    <picture id="${e.id}>
    <source/>
    <img src="${e.img}" alt="product" class="img-fluid"/>
    </picture>
    <div class="flex">

    <h4 class="product-name">${e.name}</h4>
    <p class="rating-tub"><span class="rating"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  ${e.rating}</span> <span class="t_s">(${e.total_sold})</span></p>
    <p class="price"><strong class="product-price">₹${
      e.price
    }</strong><span class="mrp">₹${e.mrp}</span><span class="off">${(
        100 -
        (e.price / e.mrp) * 100
      ).toFixed(0)}% off</span></p>
    </div>
    </div>
    `
    );
  });
};
//

function showProduct(id) {
  console.log(id);
}
const init = function () {
  slider();
  fetureProduct();
};
init();
