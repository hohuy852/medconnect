// Initialize Slick
$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 1500
    },
    slidesPerView: 1,

    speed: 5000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true, // Enable cross-fade
    },
    autoplay: {
      delay: 1000, // Autoplay delay in milliseconds
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });
});