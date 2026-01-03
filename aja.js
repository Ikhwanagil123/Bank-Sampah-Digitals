// Toggle class active
const navbarNav = document.querySelector(".navbar_menu");

// ketika humberger menu diklik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


//klik diluar sidebar untuk menghilangkan nav

const humburger = document.querySelector('#humburger-menu');

document.addEventListener('click', function(e) {
    if(!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
}) 

const backgrounds = [
  "../img/bg.png",
  "../img/bg1.png",
  "../img/bg2.png",
  "../img/bg3.png",
  "../img/bg4.png",
  "../img/bg5.png",
  "../img/bg6.png",
  "../img/bg7.png",
  "../img/bg8.png",
  "../img/bg9.png",
  "../img/bg10.png"
];

let current = 0;
const hero = document.querySelector(".content");

setInterval(() => {
  current = (current + 1) % backgrounds.length;
  hero.style.backgroundImage = `url(${backgrounds[current]})`;
}, 3000);
