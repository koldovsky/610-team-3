function openStore(evt, storeName) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(storeName).style.display = "block";
  evt.currentTarget.className += " active";
}
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
  setTimeout("timer()", 1000);
}
navSlide();

// clock footer
function updateClock() {
  const clock = document.querySelector(".clock");
  clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
