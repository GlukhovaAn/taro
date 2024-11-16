const navIton = document.querySelectorAll(".navbar a");
const imgOpen = document.querySelector("#open-navbar");
const imgClose = document.querySelector("#close-navbar");
const menuButn = document.querySelector(".navbarBtn");
const navbar = document.querySelector(".navbar");
let activitem = document.querySelector(".navbar .active");

const windowHeight = window.innerHeight;
const header = document.querySelector(".header");

function togglMenu() {
  navbar.classList.toggle("active");
  imgOpen.classList.toggle("active");
  imgClose.classList.toggle("active");
}
function handlclick(event) {
  // console.log(activitem);
  console.log(event);
  activitem.classList.remove("active");
  event.currentTarget.classList.add("active");
  activitem = event.currentTarget;
  togglMenu();
}

menuButn.addEventListener("click", togglMenu);
// navIton.forEach((batn) => {
//   batn.addEventListener("click", (event) => handlclick(event));
// });

window.addEventListener("scroll", () => {
  if (window.scrollY >= windowHeight - 100) {
    header.classList.add("down");
    header.classList.remove("up");
  } else if (
    header.classList.contains("down") &&
    window.scrollY <= windowHeight - 100
  ) {
    header.classList.remove("down");
    header.classList.add("up");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tarot-card");

  // Анимация при наведении мыши
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.3,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        zIndex: 100,
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        zIndex: 1,
      });
    });

    // Анимация при клике - перемещение карты в центр и увеличение
    card.addEventListener("click", () => {
      gsap.to(card, {
        scale: 2,
        duration: 0.7,
        zIndex: 200,
        rotation: 0,
        top: "50%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out",
      });
    });
  });
});
