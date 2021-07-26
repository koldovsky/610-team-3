function openStore(evt, storeName) {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(storeName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
document
  .getElementById("Earrings")
  .addEventListener("click", (ev) => openStore(ev, "Earrings"));
document
  .getElementById("Rings")
  .addEventListener("click", (ev) => openStore(ev, "Rings"));
document
  .getElementById("Necklaces")
  .addEventListener("click", (ev) => openStore(ev, "Necklaces"));

//burger
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};
navSlide();
//  gallery carousel
const slides = [
  "img/woman_earring.jpg",
  "img/woman_ring-neck.webp",
  "img/woman-earings-eyes.jpeg",
  "img/woman-ring.jpeg",
  "img/chineese_woman_jewerly.jpeg",
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

//timer

let counter = -1;

function timer() {
  counter++;
  document.getElementById("count").innerHTML = counter;
  setTimeout(timer, 1000);
}
timer();
navSlide();

// clock footer
function updateClock() {
  const clockFoot = document.querySelector(".clockFoot");
  clockFoot.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Quotes
const quotesSlides = [
  "img/quotes/A.svg",
  "img/quotes/M.svg",
  "img/quotes/V.svg",
];
const quotesAutors = ["Alice Meterson", "Mindy Owler", "Victoria Roulson"];
const blockquotes = [
  "«I love every item made by Aurora. Every time I open their website, I want to buy everything! The quality is very good, and looking at these items, there's no doubt it's the designer jewelry.»",
  "«I love exclusive jewelry. Unfortunately, even the big modern brands make pretty typical products that are similar to one another. Aurora is completely different!»",
  "«Thanks for my new earrings! I still receive a huge number of compliments on my jewelry and I am happy to say that it is the Aurora brand.»",
];

function showFirstSlide() {
  const activeTargetImage = document.querySelector(".quotes-current-slide");
  const activeTargetAutor = document.querySelector(".autors-slide");
  const activeTargetBlockquote = document.querySelector(".blockquote-slide");
  activeTargetImage.src = quotesSlides[0];
  activeTargetAutor.innerText = quotesAutors[0];
  activeTargetBlockquote.innerText = blockquotes[0];
}
showFirstSlide();

function showSecondSlide() {
  const activeTargetImage = document.querySelector(".quotes-current-slide");
  const activeTargetAutor = document.querySelector(".autors-slide");
  const activeTargetBlockquote = document.querySelector(".blockquote-slide");
  activeTargetImage.src = quotesSlides[1];
  activeTargetAutor.innerText = quotesAutors[1];
  activeTargetBlockquote.innerText = blockquotes[1];
}

function showThirdSlide() {
  const activeTargetImage = document.querySelector(".quotes-current-slide");
  const activeTargetAutor = document.querySelector(".autors-slide");
  const activeTargetBlockquote = document.querySelector(".blockquote-slide");
  activeTargetImage.src = quotesSlides[2];
  activeTargetAutor.innerText = quotesAutors[2];
  activeTargetBlockquote.innerText = blockquotes[2];
}
document
  .querySelector(".first-quote")
  .addEventListener("click", showFirstSlide);
document
  .querySelector(".second-quote")
  .addEventListener("click", showSecondSlide);
document
  .querySelector(".third-quote")
  .addEventListener("click", showThirdSlide);
