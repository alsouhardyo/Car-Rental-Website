// Disabling the previous dates in the calendar:-

const searchValue = document.querySelector("#location");
const pickUpDate = document.querySelector("#pick-up-date");
const today = new Date();
pickUpDate.min = today.toISOString().split("T")[0];
const returnDate = document.querySelector("#return-date");
returnDate.min = today.toISOString().split("T")[0];
const submitBTN = document.querySelector(".submit-btn");
submitBTN.addEventListener("click", () => {
    searchValue.value = "";
    pickUpDate.value = "";
    returnDate.value = "";
});

// Subscribe Functionality for the website:-

const emailElement = document.querySelector("#email");
const subscribeBtn = document.querySelector(".subscribe");
subscribeBtn.addEventListener("click", () => {
    if (emailElement.value !== "") {
        subscribeBtn.innerHTML = "Subscribed";
        subscribeBtn.style.backgroundColor = "var(--main-color)";
    }
    setTimeout(() => {
        subscribeBtn.innerHTML = "Subscribe";
        subscribeBtn.style.backgroundColor = "#474fa0";
        emailElement.value = "";
    }, 1000);
});

// Adding the ScrollReveal Animation to my website:-

const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: false,
});

sr.reveal(".text", { delay: 200, origin: "top" });
sr.reveal(".booking-container .form", { delay: 800, origin: "left" });
sr.reveal(".heading", { delay: 800, origin: "top" });
sr.reveal(".ride-container .box", { delay: 600, origin: "top" });
sr.reveal(".service-item-container .box", { delay: 600, origin: "top" });
sr.reveal(".about-us-container .box", { delay: 600, origin: "top" });
sr.reveal(".review-container .box", { delay: 600, origin: "top" });
sr.reveal(".input-container .box", { delay: 400, origin: "bottom" });
sr.reveal(".footer_container .box", { delay: 600, origin: "top" });

// Toggling the navigation panel:-

const hamNavbar = document.querySelector(".ham-navbar");
const menuBar = document.querySelector(".menubar");
const menuIcon = document.querySelector("#bar");
const allLiElement = document.querySelectorAll(".all-li");
menuBar.addEventListener("click", () => {
    hamNavbar.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-circle-xmark");
});
window.onscroll = () => {
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-circle-xmark");
};
allLiElement.forEach((li) => {
    li.onclick = () => {
        hamNavbar.classList.remove("active");
    };
});
