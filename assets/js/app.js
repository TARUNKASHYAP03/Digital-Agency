const navbar = document.querySelector(".navbar");
const hamnav = document.querySelector(".hamnav");
const navlinks = document.querySelector(".nav-links");
const navalllinks = document.querySelectorAll(".nav-links");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

hamnav.addEventListener("click", () => {
  navlinks.classList.toggle("active");
  hamnav.classList.toggle("active");
});

navalllinks.forEach(li=>li.addEventListener('click',()=>{
  navalllinks.forEach(li=>li.classList.remove('active'))
  li.classList.add('active')

  hamnav.classList.remove('active')

  navlinks.classList.remove('active')
}))

// Type Js
var typed = new Typed("#hero-title", {
  strings: ["Creative Agency", "Digital Markiting","Web Design"],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
  backDelay: 900
});

// AOS
AOS.init();