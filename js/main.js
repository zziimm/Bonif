new Swiper('.visual .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
  },
  slidesPerView: 1,
  // spaceBetween: 10,
  centersdSlides: true,

  pagination: {
    el: '.visual .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.visual .swiper-button-next',
    prevEl: '.visual .swiper-button-prev'
  }
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.7 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});
// const spyElse = document.querySelectorAll('section .inner.scroll-spy');
// spyEls.forEach(function (spyEl) {
//   new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
//     triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
//     triggerHook: 0.7 // 화면의 80% 지점에서 보여짐 여부 감시(0~1사이 지정)
//   })
//   .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
//   .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
// });

const searchDetail = document.querySelector('section.search-detail');
const searchToggleBtn = document.querySelector('.sub-menu .searchBtn');

searchToggleBtn.addEventListener('click', function () {
  if (searchDetail.classList.contains('hide')) {
    searchDetail.classList.remove('hide');
    searchToggleBtn.textContent = 'close';
  } else {
    searchDetail.classList.add('hide');
    searchToggleBtn.textContent = 'search';
  }
});

const totalGnbBg = document.querySelector('section.totalGnb')
const totalGnbinner = document.querySelector('.totalGnb .totalGnb-group')
const totalGnbBtn = document.querySelector('.sub-menu .totalGnbBtn')
const totalGnbBtnClose = document.querySelector('.totalGnbBtn-close')

totalGnbBtn.addEventListener('click', function () {
  totalGnbBg.classList.add('activeBtn');
  totalGnbinner.classList.add('activeInner');
});
totalGnbBtnClose.addEventListener('click', function () {
  totalGnbBg.classList.remove('activeBtn');
  totalGnbinner.classList.remove('activeInner');
});

const toTop = document.querySelector('#to-top')
toTop.addEventListener('click', function () {
  gsap.to(window, 0.6, {
    scrollTo: 0
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(toTop, 0.6, {
      opacity: 1,
      x: 0
    });
  } else {
    gsap.to(toTop, 0.6, {
      opacity: 1,
      x: 100
    })
  }
});

const mToggleBtn = document.querySelector('header .res-menu .material-icons')
const mToggleBg = document.querySelector('header .res-detail')
const mToggleBox = document.querySelector('header .innerBox')

mToggleBtn.addEventListener('click', function () {
  let hasActive = mToggleBg.classList.contains('mobileMenu');
  if (hasActive) {
    mToggleBg.classList.remove('mobileMenu');
    mToggleBox.classList.remove('mobileMenu');
    mToggleBtn.textContent = 'reorder'
  } else {
    mToggleBg.classList.add('mobileMenu');
    mToggleBox.classList.add('mobileMenu');
    mToggleBtn.textContent = 'close'
  }
})

const mDetailMenu = document.querySelector('header .res-detail .innerBox .mBonName ul')
const mDetailBtn = document.querySelector('header .res-detail .innerBox .mBonName button')
const mDetailBtnIcon = document.querySelector('header .res-detail .innerBox .mBonName button span')

mDetailBtn = addEventListener('click', function () {
  let hasActive2 = mDetailMenu.classList.contains('showDetail');
  if (hasActive2) {
    mDetailMenu.classList.remove('showDetail');
    mDetailBtnIcon.textContent = 'expand_more'
  } else {
    mDetailMenu.classList.add('showDetail');
    mDetailBtnIcon.textContent = 'expand_less'
  }
})