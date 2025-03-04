document.getElementsByClassName('traffic-light')[0].addEventListener('click', () => {
    document.getElementsByClassName('navlinks')[0].classList.toggle('expanded');
    document.getElementById('close-menu').classList.toggle('show');
    document.getElementsByClassName('blur-background')[0].classList.toggle('active');
    console.log('Menu toggled');
});

document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementsByClassName('navlinks')[0].classList.remove('expanded');
    document.getElementById('close-menu').classList.remove('show');
    document.getElementsByClassName('blur-background')[0].classList.remove('active');
    console.log('Menu closed');
});

// carousel below

const carousel = document.getElementById('carouselimg');
let scrollSpeed = 2;

const images = carousel.children;
const imageCount = images.length;
const clonesNeeded = 15;

for (let j = 0; j < imageCount; j++) {
  for (let i = 0; i< imageCount; i++) { 
  let clone = images[i].cloneNode(true);
  carousel.appendChild(clone);
} 
}

function moveCarousel() {
  carousel.scrollLeft += scrollSpeed;

  if (carousel.scrollLeft >= images[0].clientWidth * imageCount){ 
      carousel.scrollLeft = 0;
  }
}
setInterval(moveCarousel, 30);

  // animation

  document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('animation');
    
    function handleScroll() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight) {
            section.classList.add('animate');
        }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });
