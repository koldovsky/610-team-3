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

//timer

let counter = -1;

function timer() {
  counter++;
  document.getElementById("count").innerHTML = counter;
  setTimeout(timer, 1000);
}
timer();

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

const activeTargetImage = document.querySelector(".quotes-current-slide");
const activeTargetAutor = document.querySelector(".autors-slide");
const activeTargetBlockquote = document.querySelector(".blockquote-slide");
const activeFirstButton = document.querySelector(".first-quote");
const activeSecondButton = document.querySelector(".second-quote");
const activeThirdButton = document.querySelector(".third-quote");

function showFirstSlide() {
  activeTargetImage.src = quotesSlides[0];
  activeTargetAutor.innerText = quotesAutors[0];
  activeTargetBlockquote.innerText = blockquotes[0];
  activeFirstButton.style.backgroundColor = "rgba(217, 181, 161, 1)";
  activeSecondButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
  activeThirdButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
}
showFirstSlide();

function showSecondSlide() {
  activeTargetImage.src = quotesSlides[1];
  activeTargetAutor.innerText = quotesAutors[1];
  activeTargetBlockquote.innerText = blockquotes[1];
  activeFirstButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
  activeSecondButton.style.backgroundColor = "rgba(217, 181, 161, 1)";
  activeThirdButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
}

function showThirdSlide() {
  activeTargetImage.src = quotesSlides[2];
  activeTargetAutor.innerText = quotesAutors[2];
  activeTargetBlockquote.innerText = blockquotes[2];
  activeFirstButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
  activeSecondButton.style.backgroundColor = "rgba(217, 181, 161, 0.3)";
  activeThirdButton.style.backgroundColor = "rgba(217, 181, 161, 1)";
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

// Articles
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const btnCloseModal = document.querySelectorAll(".close-modal");
const bntsShowModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  modal1.classList.add("hidden-article");
  modal2.classList.add("hidden-article");
  modal3.classList.add("hidden-article");
};

const openModal1 = function () {
  modal1.classList.remove("hidden-article");
};
const openModal2 = function () {
  modal2.classList.remove("hidden-article");
};
const openModal3 = function () {
  modal3.classList.remove("hidden-article");
};

for (let i = 0; i < btnCloseModal.length; i++)
  btnCloseModal[i].addEventListener("click", closeModal);

bntsShowModal[0].addEventListener("click", openModal1);
bntsShowModal[1].addEventListener("click", openModal2);
bntsShowModal[2].addEventListener("click", openModal3);
