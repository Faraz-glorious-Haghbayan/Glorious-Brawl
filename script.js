document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
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

document.getElementById('searchBar').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const brawlers = document.querySelectorAll('.container > div');

    brawlers.forEach(brawler => {
        const brawlerName = brawler.querySelector('h3').textContent.toLowerCase();
        
        if (brawlerName.includes(searchQuery)) {
            brawler.style.display = 'flex';
        } else {
            brawler.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const brawlerCards = document.querySelectorAll(".brawler-card");
    const toggleButton = document.getElementById("toggle-brawlers");

    // Initially hide all brawler cards
    brawlerCards.forEach(card => card.style.display = "none");

    // Toggle visibility on button click
    toggleButton.addEventListener("click", function () {
        const areHidden = brawlerCards[0].style.display === "none";
        
        brawlerCards.forEach(card => {
            card.style.display = areHidden ? "block" : "none";
        });

        // Change button text based on the state
        toggleButton.textContent = areHidden ? "Hide Brawlers" : "Show Brawlers";
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}




    function changeVideoForMobile() {
        const videoSource = document.getElementById('videoSource');
        const videoElement = document.getElementById('background-video');

        if (window.innerWidth <= 768) {
            // Mobile video source
            videoSource.src = 'mobile.mp4'; // Replace with your mobile video link
        } else {
            // Desktop video source
            videoSource.src = 'mobilevid.mp4'; // Your original PC video
        }

        // Reload the video element to apply the new source
        videoElement.load();
    }

    // Run the function when the page loads
    window.onload = changeVideoForMobile;

    // Run the function whenever the screen is resized (responsive behavior)
    window.onresize = changeVideoForMobile;
