function toggleMenu() {
    const navItems = document.getElementById('navItems');
    navItems.classList.toggle('active');
}


// Select the Recipients nav-item and 'For Her' section
const recipientsNavItem = document.querySelector('.nav-item');
const forHerContent = document.querySelector('.for-her-right');

// Listen for hover on the Recipients nav-item
recipientsNavItem.addEventListener('mouseenter', () => {
  // Show the 'For Her' section
  forHerContent.style.display = 'flex';
});

// Optional: Hide the 'For Her' section when moving out of the Recipients nav-item
recipientsNavItem.addEventListener('mouseleave', () => {
  forHerContent.style.display = 'none';
});




// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let backToTopBtn = document.getElementById("backToTopBtn").parentElement;
    
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";  // Show the button
    } else {
        backToTopBtn.style.display = "none";   // Hide the button
    }
}

// Smooth scroll to top when the button is clicked
document.getElementById("backToTopBtn").onclick = function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
