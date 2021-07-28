// accordion
const accordion = Array.from(document.getElementsByClassName("accordion-visible"));
accordion.forEach( elem => {
    elem.addEventListener("click", function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
        }
    });
});
