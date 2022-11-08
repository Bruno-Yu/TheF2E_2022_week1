"use strict";

AOS.init({
  initClassName: "axios-init",
  delay: 1000,
  // values from 0 to 3000, with step 50ms
  duration: 1000,
  // values from 0 to 3000, with step 50ms
  useClassNames: true
});

// mouse scroll down animation
gsap.to(".mouse_scroll", {
  yPercent: 50,
  duration: 0.5,
  repeat: -1,
  yoyo: true
});
var entry_hero = gsap.timeline({
  scrollTrigger: {
    trigger: ".entry-section",
    pin: true,
    // pin the trigger element while active 在Scroll 觸發動畫後的 start 與end的期間，其trigger物件，會被固定位置，直到到達end, 這值可以是Boolean true(trigger物件)，或是直接給予一個選擇器指定物件
    // 若沒有特別設定start與end 預設，每滾6下一格動畫
    // pinSpacing: false,在目前這個案例沒有效果
    start: "top",
    // when the top of the trigger hits the top of the viewport //動畫開始，有兩個參數，第一個是trigger物件的位置(上下中)，第二個是scrollbar經過的(上下中位置，也就是距離viewport的位置, 50%就是距離viewport50%下的位置)
    end: function end() {
      return "".concat(document.querySelector('.hero-section').offsetHeight);
    },
    //動畫結束，與start一樣有兩個參數的上下中位置，也可以直接抓DOM元素抓其物件的高度
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: 8 // smooth scrubbing, takes 1 second to "catch up" to the scrollbar，若要設定成秒數，要設start與end才有效果，否則與Boolean true效果相同，秒數設置後有平滑的效果，此為動畫在每個scrub後的lagging持續時間
    // markers: true,
    // scroller: ".scroller"
    // pinSpacing 就是被pin的物件下被預留的空間，預設是false但若是true的話，會在pin的位置被觸發效果的期間預留出空間
    // toggleClass 屬性，在此段效果期間為trigger物件加上的class樣式名稱，但也可以使用toggleClass: { target:"nav", class:"active" }這方式自行指定想加class的物件
  }
  // onComplete: () => gsap.set(window, { scrollTo: "#hexschool" })
});
// news_paper_1
entry_hero.to(".news_paper_1", {
  yPercent: 15,
  ease: Power2.easeOut
})
// news_paper_2
.to(".news_paper_2", {
  yPercent: -50,
  ease: Power2.easeOut
})
// news_paper_3
.to(".news_paper_3", {
  yPercent: 20,
  ease: Circ.easeOut
}).to(".mouse", {
  autoAlpha: 0
})
// news_paper_1
.to(".news_paper_1", {
  xPercent: 130,
  yPercent: 50,
  ease: Circ.easeOut
})
// news_paper_2
.to(".news_paper_2", {
  yPercent: -150,
  ease: Circ.easeOut
})
// banner_avatar
.to(".banner_avatar", {
  yPercent: -50,
  ease: Power1.easeOut
})
// news_paper_3
.to(".news_paper_3", {
  xPercent: -130,
  yPercent: 50,
  ease: Circ.easeOut
})
// banner_avatar
.to(".banner_avatar", {
  yPercent: -99,
  ease: Power1.easeOut
})
// banner_stress
.to(".banner_stress", {
  yPercent: -99,
  ease: Power1.easeOut
}, ">-1")
// mouse_2
.to(".mouse_2", {
  opacity: 1
}).to(".stamp", {
  opacity: 1,
  duration: 0.5
}, ">-1");

// .to(window, { onStart: () => {scrollTo:{ '.hexSchool'} }})

// wand animation 
var wandAnimation = bodymovin.loadAnimation({
  container: document.querySelector('#wand-animation'),
  path: '../assets/json/wand_loading.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "wand Animation"
});
var wandAnimation_class = bodymovin.loadAnimation({
  container: document.querySelector('#wand-animation_class'),
  path: '../assets/json/wand_loading.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "wand Animation_class"
});
$(window).on('load', function () {
  $('#loading-page').delay(1000).fadeOut('slow');
});
$(document).ready(function () {
  $('.btn-show').on('click touchstart', function (e) {
    e.preventDefault();
    $('.wand_layout').fadeOut('slow');
  });
  $('.menu').on('click touchstart', function (e) {
    e.preventDefault();
    $('.menu_dropdown').removeClass('-translate-x-full');
  });
  $('.close-btn').on('click touchstart', function (e) {
    e.preventDefault();
    $('.menu_dropdown').addClass('-translate-x-full');
  });
  $('.btn-login').on('click touchstart', function (e) {
    e.preventDefault();
    window.location.href = "https://2022.thef2e.com/login";
  });
});
//# sourceMappingURL=all.js.map
