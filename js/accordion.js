// accordion
const acc = document.getElementsByClassName("visible-string");
for (let v = 0; v <= acc.length; v++) {
    acc[v].addEventListener("click", function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
        }
    });
}