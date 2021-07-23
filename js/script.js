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
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('.nav-active');
        burger.classList.toggle('.toggle');
    });
}
navSlide();
//  gallery carousel
const slides = [
    'img/woman_earring.jpg',
    'img/woman_ring-neck.webp',
    'img/woman-earings-eyes.jpeg',
    'img/woman-ring.jpeg',
    'img/chineese_woman_jewerly.jpeg'
]
function showCurrentSlide() {
    const slideTarget = document.querySelector('.current-slide');
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
    
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);
    
    showCurrentSlide();
    setInterval(nextSlide, 6000);

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