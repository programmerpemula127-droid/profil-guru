// Navbar shadow on scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll reveal effect
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let visiblePoint = 150;

    if (elementTop < windowHeight - visiblePoint) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// =======================
// BUBBLE DECORATION
// =======================

const bubbleArea = document.querySelector(".bubble-area");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random size
  const sizeClass = ["small", "medium", "large"];
  bubble.classList.add(sizeClass[Math.floor(Math.random() * sizeClass.length)]);

  // Random horizontal position
  bubble.style.left = Math.random() * window.innerWidth + "px";

  // Random speed
  bubble.style.animationDuration = 8 + Math.random() * 6 + "s";

  bubbleArea.appendChild(bubble);

  // Remove bubble after animation
  setTimeout(() => {
    bubble.remove();
  }, 15000);
}

// Create many bubbles continuously
setInterval(createBubble, 500);

const track = document.getElementById("galeri");
const btnLeft = document.getElementById("gal-left");
const btnRight = document.getElementById("gal-right");

// Tombol navigasi
btnRight.onclick = () => (track.scrollLeft += 300);
btnLeft.onclick = () => (track.scrollLeft -= 300);

function doScroll() {
  track.scrollLeft += 300;

  // Jika sudah hampir mencapai akhir, reset
  if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
    track.scrollLeft = 0;
  }
}

let autoScroll = setInterval(doScroll, 3000);

// Pause saat hover
track.addEventListener("mouseenter", () => clearInterval(autoScroll));
track.addEventListener("mouseleave", () => {
  autoScroll = setInterval(doScroll, 3000);
});
