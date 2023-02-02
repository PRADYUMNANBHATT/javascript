"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollto = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
const tab = document.querySelectorAll(".operations__tab");
const tabContent = document.querySelectorAll(".operations__content");
const header = document.querySelector(".header");
const allsection = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-link");
const section2 = document.getElementById("section--2");
const allbutton = document.getElementsByTagName("button");
const allbtn = document.getElementsByClassName("btn");
const nav = document.querySelector(".nav");
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((i) => i.addEventListener("click", openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const html = `<div><h4>Hi how are you  <button class="btn">Get</button></h4></div>`;
// section2.insertAdjacentHTML('beforebegin',html);
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML = `We use Kookies<button class="btn btn--close-cookie">Get It</button>`;
// header.prepend(message)
// header.append(message)
// header.append(message.cloneNode(true))
// header.before(message);
// header.after(message)

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px";
// document.documentElement.style.setProperty("--color-primary", "red");
const logo = document.querySelector(".nav__logo");
logo.alt = "logo_image";
logo.getAttribute("src");
logo.setAttribute("src", "img/logo.png");
// document.querySelector(".btn--close-cookie").addEventListener("click", () => {
//   message.remove();
//   // message.parentElement.removeChild(message)
// });
btnScrollto.addEventListener("click", () => {
  //   const s1cord = section1.getBoundingClientRect();

  //   window.scrollTo(
  //     s1cord.left + window.pageXOffset,
  //     s1cord.top + window.pageYOffset
  //   );
  // window.scrollTo({
  //     left:s1cord.left + window.pageXOffset,
  //     top:s1cord.top + window.pageYOffset,
  //     behavior:'smooth',

  // })
  section1.scrollIntoView({ behavior: "smooth" });
});
const h1 = document.querySelector("h1");
h1.addEventListener("mouseenter", function jagu(e) {
  // alert('hi you hovered over h1')
  h1.removeEventListener("mouseenter", jagu);
});
// h1.onmouseenter=()=>{alert('anotherway')}

const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// nav.addEventListener("mouseenter", function (e) {
//   this.style.backgroundColor = `rgb(${randomNumber(0, 255)},${randomNumber(
//     0,
//     255
//   )},${randomNumber(0, 255)})`;
//   // e.stopPropagation()
// });
document.querySelector(".nav__links").addEventListener("click", function (e) {
  if (e.target.classList.contains("nav__link")) {
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
h1.querySelectorAll(".highlight");
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "white";

// console.log(
//   h1.childNodes,
//   h1.children,
//   h1.parentElement,
//   h1.parentNode,
//   (h1.closest(".header").style.background = "var(--gradient-primary)"),
//   (h1.closest("h1").style.background = "var(--gradient-secondary)"),
//   h1.previousElementSibling,
//   h1.nextElementSibling.style.color='white'
// );
document
  .querySelector(".operations__tab-container")
  .addEventListener("click", function (e) {
    // let id=e.target.getAttribute('data-tab')

    let clicked = e.target.closest(".operations__tab");
    if (!clicked) return;
    tab.forEach((e) => {
      e.classList.remove("operations__tab--active");
    });
    tabContent.forEach((e) => {
      e.classList.remove("operations__content--active");
    });
    document
      .querySelector(`.operations__tab--${clicked.dataset.tab}`)
      .classList.add("operations__tab--active");
    document
      .querySelector(`.operations__content--${clicked.dataset.tab}`)
      .classList.add("operations__content--active");
  });
const opacityChanger = (e) => {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const sublink = link.closest(".nav").querySelectorAll(".nav__link");

    sublink.forEach((er) => {
      if (er !== link) {
        er.style.opacity = this;
      }
    });
  }
};
// nav.addEventListener("mouseover", function (e) {

//   opacityChanger(e,0.5);
// });
// nav.addEventListener("mouseout", function (e) {

//     opacityChanger(e,1);
//   });
nav.addEventListener("mouseover", opacityChanger.bind(0.5));
nav.addEventListener("mouseout", opacityChanger.bind(1));
const sectionCord = section1.getBoundingClientRect();
// window.addEventListener('scroll',function (e) {
//     if (window.scrollY>sectionCord.top) {
//         nav.classList.add('sticky')
//     }else{
//         nav.classList.remove('sticky')
//     }

// });

const obaserverCallback = function (entries, observer) {
  // const [e]=entries
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
};

const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};

const observer = new IntersectionObserver(obaserverCallback, observerOptions);
observer.observe(header);

//section display
const allsections = document.querySelectorAll("section");
const sectionCallback = function (entries, observer) {
  const [e] = entries;
  if (!e.isIntersecting) return;
  //   e.target.classList.remove("section--hidden");
  observer.unobserve(e.target);
};

const sectionObserver = new IntersectionObserver(sectionCallback, {
  root: null,
  threshold: 0.15,
});
allsection.forEach((section) => {
  sectionObserver.observe(section);
  //   section.classList.add("section--hidden");
});

const allImages = document.querySelectorAll("img[data-src]");

const lazzycallback = (entries, observer) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.src = e.target.dataset.src;
    e.target.addEventListener("load", function () {
      e.target.classList.remove("lazy-img");
    });
    observer.unobserve(e.target);
  });
};
const lazyobserver = new IntersectionObserver(lazzycallback, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});
allImages.forEach((e) => {
  lazyobserver.observe(e);
});

///*****slider*****
function slider() {
  const allslides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const slideDots = document.querySelector(".dots");

  //   const slider = document.querySelector(".slider");
  //   slider.style.transform='scale(0.5)';
  //   slider.style.overflow='visible';
  let count = 0;
  const maxLength = allslides.length;
  let goSLide = (count) => {
    allslides.forEach((e, i) => {
      e.style.transform = `translateX(${(i - count) * 100}%)`;
    });
  };
  const createDots = () => {
    allslides.forEach((_, i) => {
      slideDots.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  createDots();
  goSLide(count);

  const prevSlide = function () {
    if (count === 0) {
      count = maxLength - 1;
    } else {
      count--;
    }
    goSLide(count);
    activeDot(count);
  };
  const nextSlide = function () {
    if (count === maxLength - 1) {
      count = 0;
    } else {
      count++;
    }
    goSLide(count);
    activeDot(count);
  };
  const activeDot = (e) => {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((el) => {
      el.classList.remove("dots__dot--active");
    //   if (el.dataset.slide === e) {
    //     el.classList.add("dots__dot--active");
    //   }
  
    });
    document
    .querySelector(`.dots__dot[data-slide="${e}"]`)
    .classList.add("dots__dot--active");
    // e.target.classList.add("dots__dot--active");
  };
  activeDot(count);
  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
  slideDots.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // const{slide}=e.target.dataset
      const slide = e.target.dataset.slide;
      e.target.classList.add("dots__dot--active");
      goSLide(slide);
      activeDot(slide);
    }
  });
}
slider();
