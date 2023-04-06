new Swiper("#swiper-1", {
  effect: "fade",
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: "#right",
    prevEl: "#left",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  freeMode: true,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-card",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

new Swiper(".swiper-3", {
  effect: "fade",
  navigation: {
    nextEl: "#pick-right",
    prevEl: "#pick-left",
  },
  pagination: {
    el: ".pick-pagination",
    type: "fraction",
  },
});
