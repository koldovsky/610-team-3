//  gallery carousel
const slides = [
    "img/gold-ring.jpg",
    "img/silver-ring.jpg",
    "img/woman-ear-ring.jpg",
    "img/gold-two-ring.jpg",
    "img/necklaces.jpg",
    "img/woman-necklaces.jpg"
  ];
  
  function showCurrentSlide() {
    const slideTarget = document.querySelector(".current-slide");
    slideTarget.src = slides[currentSlide];
  }
  let currentSlide = 0;
  
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
  }
  
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
  }
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);
  
  showCurrentSlide();
  setInterval(nextSlide, 6000);
