const slider = document.querySelector("[data-slider-hero]");

new Splide(slider, {
  type: "loop",
  perPage: 1,
  pagination: false,
  arrowPath:
    "M30.54 18.902L11.682.432A1.595 1.595 0 009.46.47a1.516 1.516 0 000 2.138l17.747 17.383L9.46 37.373a1.517 1.517 0 000 2.176c.614.601 1.609.601 2.222 0L30.54 21.08a1.517 1.517 0 000-2.177z",
}).mount();
