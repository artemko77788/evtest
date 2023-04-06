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
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination-card",
    type: "fraction",
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
