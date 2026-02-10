// パララックス
// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".track", {
//   xPercent: -75, // (枚数-1) × -100 / 枚数
//     ease: "none",
//     scrollTrigger: {
//     trigger: ".horizontal",
//     start: "top top",
//     end: () => "+=" + window.innerWidth * 3,
//     scrub: true,
//     pin: true,
//     anticipatePin: 1
//     }
// });
// const track = document.querySelector('.panel');
const section = document.querySelector('.track');
// let progress = 1;


window.addEventListener('scroll', () => {
  const start = section.offsetTop;
  const end = start + section.offsetHeight - innerHeight;
  const progress = (scrollY - start) / (end - start);

  track.style.transform = `translateX(${-progress * 200}vw)`;
//   progress += 0.01;
});



