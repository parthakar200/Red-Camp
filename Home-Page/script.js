// // Smooth scrolling for navigation
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Form submission handling
// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert('Thank you for your message! We’ll get back to you soon.');
//     this.reset();
// });

// // Animate elements on scroll (using Intersection Observer for modern performance)
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//             observer.unobserve(entry.target);
//         }
//     });
// }, { threshold: 0.1 });

// document.querySelectorAll('.card, .step, .event-card, h2').forEach(element => {
//     observer.observe(element);
// });



// 1. Smooth Scrolling for Navigation Links
// This makes the page scroll smoothly when you click on a navigation link
function smoothScroll() {
    // Find all links that start with "#"
    let links = document.getElementsByTagName("a");
    
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("href").startsWith("#")) {
            links[i].onclick = function(event) {
                event.preventDefault(); // Stop the default link behavior
                let targetId = this.getAttribute("href"); // Get the target section's ID (e.g., "#home")
                let targetSection = document.querySelector(targetId); // Find the section
                targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to it
            };
        }
    }
}

// 2. Handle Contact Form Submission
// This shows an alert when the form is submitted and resets it
function handleFormSubmit() {
    let form = document.getElementById("contact-form");
    
    if (form) {
        form.onsubmit = function(event) {
            event.preventDefault(); // Stop the form from refreshing the page
            alert("Thank you for your message! We’ll get back to you soon."); // Show a simple message
            form.reset(); // Clear the form fields
        };
    }
}

// 3. Simple Animation for Cards and Sections
// This adds a fade-in effect when the page loads (basic for beginners)
function addSimpleAnimation() {
    let cards = document.getElementsByClassName("card");
    let steps = document.getElementsByClassName("step");
    let eventCards = document.getElementsByClassName("event-card");
    
    // Function to fade in elements
    function fadeIn(element) {
        element.style.opacity = "0"; // Start hidden
        setTimeout(() => {
            element.style.transition = "opacity 1s"; // Add a 1-second fade
            element.style.opacity = "1"; // Fade in
        }, 100); // Delay to allow transition to work
    }
    
    // Apply fade-in to all cards, steps, and event cards
    for (let i = 0; i < cards.length; i++) {
        fadeIn(cards[i]);
    }
    for (let i = 0; i < steps.length; i++) {
        fadeIn(steps[i]);
    }
    for (let i = 0; i < eventCards.length; i++) {
        fadeIn(eventCards[i]);
    }
}

// 4. Run all functions when the page loads
window.onload = function() {
    smoothScroll(); // Start smooth scrolling
    handleFormSubmit(); // Handle form submission
    addSimpleAnimation(); // Add simple fade-in animations
};