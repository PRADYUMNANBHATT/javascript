"usestrict";
// navigation component
const nav = document.querySelector(".pizza");
const navMobile = document.querySelector(".nav-link");

nav.addEventListener("click", () => {
  navMobile.classList.toggle("onoff");
});

//Image carousel
const carousel = document.querySelector(".carousel");
const carouselImg = document.getElementById("carousel-set");
const src = "";
let i = 0;
const array = [
  "./pexels-karolina-grabowska-5632402.jpg",
  "./pexels-markus-spiske-177598.jpg",

  "./luis-de-leon-KxVvBACBfi4-unsplash.jpg",
];

function nextImage() {
  carouselImg.getAttribute("src", src);
  for (let j = 0; j < array.length; j++) {
    if (array[j] == src) {
      j = i;
      break;
    }
  }

  if (i < array.length - 1) {
    i++;
    carouselImg.setAttribute("src", array[i]);
  } else {
    i = 0;
    carouselImg.setAttribute("src", array[i]);
  }
}
function previousImage() {
  carouselImg.getAttribute("src", src);
  for (let j = 0; j < array.length; j++) {
    if (array[j] == src) {
      j = i;
      break;
    }
  }

  if (i <= array.length - 1 && i != 0) {
    i--;
    carouselImg.setAttribute("src", array[i]);
  } else {
    i = array.length - 1;
    carouselImg.setAttribute("src", array[i]);
  }
}
// setInterval(nextImage,3000)

// product carousel
const product = [
  {
    product_img: "xxl-maxi-07-fabflee-original-imagdc44mc9gcfhx.webp",
    prduct_name: "beutiful gown",
    product_price: "Rs:350/-",
  },
  {
    product_img: "xxl-maxi-07-fabflee-original-imagdc44mc9gcfhx.webp",
    prduct_name: "noty gown",
    product_price: "Rs:550/-",
  },
  {
    product_img: "l-78-j-turritopsis-original-imagg32yjp7hb6wz.webp",
    prduct_name: "trump gown",
    product_price: "Rs:650/-",
  },
  {
    product_img: "l-78-j-turritopsis-original-imagg32yjp7hb6wz.webp",
    prduct_name: "fdsdf gown",
    product_price: "Rs:650/-",
  },
  {
    product_img: "l-78-j-turritopsis-original-imagg32yjp7hb6wz.webp",
    prduct_name: "fdsdf gown",
    product_price: "Rs:650/-",
  },
  {
    product_img: "l-78-j-turritopsis-original-imagg32yjp7hb6wz.webp",
    prduct_name: "fdsdf gown",
    product_price: "Rs:650/-",
  },
];
fetch("product.json")
  .then(function (responce) {
    return responce.json();
  })

  .then(function productCarousel(data) {
    const place_holder = document.querySelector("#product");
    let out = "";
    for (let i in data.product) {
      out += `
    <div class="product-box" >
    <img
      alt=""
      id="prd_img_1"
      src="${product[i].product_img}"
    />
    <div class="overlay">
      <h6 id="hd_1">${product[i].prduct_name}</h6>
      <span id="pd_price">${product[i].product_price}</span>
    </div>
  </div>`;
    }

    place_holder.innerHTML = out;
  });
// productCarousel();
