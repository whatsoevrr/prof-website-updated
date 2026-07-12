// console.log("JavaScript Loaded");
// const sections = document.querySelectorAll(".content");


// sections.forEach(section => {

//     const header = section.querySelector(".why-topic");
//     const content = section.querySelector(".hidden-content");
//     const icon = section.querySelector(".toggle-btn i");

//     header.addEventListener("click", () => {

//         // Close all other sections
//         sections.forEach(item => {
//             if(item !== section){

//                 item.classList.remove("active");

//                 const otherContent = item.querySelector(".hidden-content");
//                 const otherIcon = item.querySelector(".toggle-btn i");

//                 otherContent.style.maxHeight = null;
//                 otherIcon.style.transform = "rotate(0deg)";
//             }
//         });

//         // Toggle current section
//         section.classList.toggle("active");

//         if(section.classList.contains("active")){

//             content.style.maxHeight = content.scrollHeight + "px";
//             icon.style.transform = "rotate(180deg)";

//         }
//         else{

//             content.style.maxHeight = null;
//             icon.style.transform = "rotate(0deg)";
//         }

//     });

// });
// const buttons = document.querySelectorAll(".toggle-btn");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         console.log("Button clicked");
//     });
// });
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        const content = this.closest(".content");
        const hidden = content.querySelector(".hidden-content");
        const icon = this.querySelector("i");

        if (content.classList.contains("active")) {

            content.classList.remove("active");
            hidden.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";

        } else {

            content.classList.add("active");
            hidden.style.maxHeight = hidden.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)";
        }

    });

});
// const currentPage = window.location.pathname.split("/").pop();

// const navLinks = document.querySelectorAll(".navigate a");

// navLinks.forEach(link => {

//     const linkPage = link.getAttribute("href");

//     if(linkPage === currentPage){
//         link.classList.add("active");
//     }

// });
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navigate a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
  
})

