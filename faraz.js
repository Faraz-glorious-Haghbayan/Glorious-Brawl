document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});


function smoothScroll(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute("href"); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Select the target section
    
    if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // You can also save the theme preference in localStorage
    const isDark = body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Check the saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
    }
};


const sections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
