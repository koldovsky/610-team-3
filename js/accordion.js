// // accordion
// const accordion = Array.from(document.getElementsByClassName("accordion-visible"));
// accordion.forEach( elem => {
//     elem.addEventListener("click", function() {
//         this.classList.toggle('active');
//         const panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//           } else {
//             panel.style.display = "block";
//         }
//     });
// });
//accordion
// const accordion = Array.from(document.getElementsByClassName("accordion-visible"));
// for (const elem of accordion) {
//   elem.addEventListener("click", function() {
//     this.classList.toggle("active-accordion");
//     const panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// } 

//accordion
const accordion = Array.from(document.getElementsByClassName("accordion-visible"));
accordion.forEach ( elem => {
  elem.addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
});