"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('Hello! Bruno');
});

// gsap.registerPlugin(ScrollTrigger);
// let panels = gsap.utils.toArray(".panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top", 
//     pin: true, 
//     pinSpacing: false,
//     snap: 1/4
//   });
// });

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
    // pin the trigger element while active
    // start: "top top", // when the top of the trigger hits the top of the viewport
    // end: "+=500", // end after scrolling 500px beyond the start
    scrub: true // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  }
});
// news_paper_1
entry_hero.to(".news_paper_1", {
  yPercent: 15,
  ease: Power2.easeOut
});
// news_paper_2
entry_hero.to(".news_paper_2", {
  yPercent: -50,
  ease: Power2.easeOut
});
// news_paper_3
entry_hero.to(".news_paper_3", {
  yPercent: 20,
  ease: Circ.easeOut
});
entry_hero.to(".mouse", {
  autoAlpha: 0
});
// news_paper_1
entry_hero.to(".news_paper_1", {
  xPercent: 130,
  yPercent: 50,
  ease: Circ.easeOut
});
// news_paper_2
entry_hero.to(".news_paper_2", {
  yPercent: -120,
  ease: Circ.easeOut
});
// banner_avatar
entry_hero.to(".banner_avatar", {
  yPercent: -50,
  ease: Power1.easeOut
});
// news_paper_3
entry_hero.to(".news_paper_3", {
  xPercent: -130,
  yPercent: 50,
  ease: Circ.easeOut
});
// banner_avatar
entry_hero.to(".banner_avatar", {
  yPercent: -99,
  ease: Power1.easeOut
});
// banner_stress
entry_hero.to(".banner_stress", {
  yPercent: -99,
  ease: Power1.easeOut
}, ">-1");
// mouse_2
entry_hero.to(".mouse_2", {
  opacity: 1
});
entry_hero.to(".stamp", {
  opacity: 1,
  duration: 0.5
}, ">-1");
// stamp
// entry_hero.to(".news_paper_3", { xPercent: -120, yPercent: 50, duration: 2, ease: Circ.easeOut });
// entry_hero.to(panels,">1")
//# sourceMappingURL=all.js.map
