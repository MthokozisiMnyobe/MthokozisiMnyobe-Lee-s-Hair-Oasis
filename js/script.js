// ===============================
// MOBILE MENU TOGGLE
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// BOOKING FORM → WHATSAPP
// ===============================
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const phone = document.getElementById("phone").value.trim();

        // Simple validation safety
        if (!name || !service || !date || !time || !phone) {
            alert("Please complete all fields.");
            return;
        }

        const message = 
`Hello Lee’s Hair Oasis,

I would like to book an appointment:

Name: ${name}
Service: ${service}
Date: ${date}
Time: ${time}
Phone: ${phone}`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappNumber = "27658543494"; 
        // Example: 27831234567 (NO +, NO spaces)

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");

        // Optional: Reset form after submission
        bookingForm.reset();
    });
}