const menuIcon = document.querySelector(".menu--icon");
const images = document.querySelectorAll(".section--img");
const menuWindow = document.querySelector(".menu-list");
const menuClosbtn = document.querySelector(".menu-clos-btn");

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;

      entry.target.classList.add(`anim-section--${entry.target.id}`);
      setTimeout(() => {
        entry.target.classList.remove(`anim-section--${entry.target.id}`);
        // entry.target.classList.remove("section--img");
      }, 10000);
      // observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

images.forEach((image) => observer.observe(image));
menuIcon.addEventListener("click", function (e) {
  menuWindow.classList.toggle("menu--open");
});
menuClosbtn.addEventListener("click", function (e) {
  menuWindow.classList.toggle("menu--open");
});
