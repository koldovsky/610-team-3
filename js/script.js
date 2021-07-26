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
  const nav = document.querySelector(".menu");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};
navSlide();

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
  const clock = document.querySelector(".clock");
  clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
