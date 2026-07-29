
const split = new SplitType("#smoothText", { types: 'chars' });

gsap.to(".char", {
  opacity: 1,
  y: 0,
  stagger: .007,
  ease: "power2.out",
  duration: .3,
  delay: 0.3
});
// init Isotope
var $menu = $('.menu-pro').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $menu.isotope({ filter: filterValue });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

});

const viw = document.querySelector(".vew-pass");
const pass = document.querySelector(`.modal-login form input[type="password"]`);
const passwordIcon = document.querySelector(".pass-login");

viw.onclick = function () {
  if (viw.classList.contains("active")) {
    pass.setAttribute("type", "text");
    viw.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    passwordIcon.innerHTML = `<i class="fa-solid fa-unlock pass-login-icon "></i>`
    viw.classList.remove("active");
  }
  else {
    pass.setAttribute("type", "password");
    viw.innerHTML = ` <i class="fa-solid fa-eye-slash"></i>`;
    passwordIcon.innerHTML = `<i class="fa-solid fa-lock pass-login-icon "></i>`
    viw.classList.add("active");
  }
}














