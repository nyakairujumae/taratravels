const swiper = new Swiper(".swiper", {
  slidePerview: 1,
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["100%", 0, 0],
    },
  },

  loop: true,
  direction: "horizontal",

  autoplay: {
    delay: 5000,
  },

  speed: 400,
  spacebetween: 100,
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerview: 3,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    968: {
      slidesPerView: 3,
    }
  }
});

const swiper3 = new Swiper(".swiper3", {
  slidesPerview: 2,
  spaceBetween: 35,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    968: {
      slidesPerView: 2,
    }
  }
});

const swiper4 = new Swiper(".swiper4", {
  slidesPerview: 1,
  spaceBetween: 94,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupwithBlank: true,

  autoplay: {
    delay: 5000,
  },
  speed: 400,
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    968: {
      slidesPerView: 1,
    }
  }
});

const swiper5 = new Swiper(".swiper5", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
  },
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 1,
    }
  }
});




