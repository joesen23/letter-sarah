// AOS
AOS.init();

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        hamburger.textContent = '✕';
    } else {
        hamburger.textContent = '☰';
    }
});

// FORM
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert("Message sent!");
    this.reset();
});