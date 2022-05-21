// mobile-menu
let mobileMenu = document.querySelector(".navbar__menu");
let openIcon = document.querySelector(".open-menu");
let closeIcon = document.querySelector(".close-menu");

openIcon.addEventListener("click", function (e) {
  mobileMenu.style.left = "0";
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
});
closeIcon.addEventListener("click", function (e) {
  mobileMenu.style.left = "-1000px";
  openIcon.style.display = "block";
  closeIcon.style.display = "none";
});

//popular-food------------------------
let listBtn = document.querySelectorAll(".popular__btn");
let listFood = document.querySelectorAll(".popular__item");

listBtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const typeBtn = e.target.getAttribute("type");
    document.querySelector(".popular__btn.active").classList.remove("active");
    btn.classList.add("active");

    listFood.forEach(function (food) {
      const typeFood = food.getAttribute("type");

      if (typeBtn == typeFood || typeBtn == "all") {
        food.classList.remove("hide");
      } else {
        food.classList.add("hide");
      }
    });
  });
});

// Back to top
let backTop = document.querySelector(".back-to-top");
window.onscroll = () => {
  if (window.pageYOffset > 300 || document.documentElement.scrollTop > 300) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
};

// mở modal ticket
const buyBtns = document.querySelectorAll(".js-buy-ticket");
console.log(buyBtns);
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");

function showBuyTicket() {
  modal.classList.add("open");
}

function hideBuyTicket() {
  // modal.style.display= 'flex';
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTicket);
}

closeModal.addEventListener("click", hideBuyTicket);
// modal.onclick =hideBuyTicket;
modal.addEventListener("click", hideBuyTicket);
modalContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});
