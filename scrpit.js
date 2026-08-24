// ================= NAVIGATION MENU =================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// ================= JOIN BUTTON =================

function joinSkillBridge() {

    alert(
        "Welcome to SkillBridge! 🚀\n\n" +
        "Your journey to Learn. Earn. Get Hired. starts here!"
    );

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name + "! 🎉\n\n" +
        "Your message has been received by SkillBridge."
    );

    contactForm.reset();

});


// ================= NAV LINK CLICK =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});
