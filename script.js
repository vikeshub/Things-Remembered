function toggleMenu() {
  const navItems = document.getElementById("navItems");
  navItems.classList.toggle("active");
}

// Select the Recipients nav-item and 'For Her' section
const recipientsNavItem = document.querySelector(".nav-item");
const forHerContent = document.querySelector(".for-her-right");

// Listen for hover on the Recipients nav-item
recipientsNavItem.addEventListener("mouseenter", () => {
  // Show the 'For Her' section
  forHerContent.style.display = "flex";
});

// Optional: Hide the 'For Her' section when moving out of the Recipients nav-item
recipientsNavItem.addEventListener("mouseleave", () => {
  forHerContent.style.display = "none";
});

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let backToTopBtn = document.getElementById("backToTopBtn").parentElement;

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block"; // Show the button
  } else {
    backToTopBtn.style.display = "none"; // Hide the button
  }
}

// Smooth scroll to top when the button is clicked
document.getElementById("backToTopBtn").onclick = function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// mobile View
function toggleMenu() {
  const sideMenu = document.getElementById("sidemenu");
  const backdrop = document.querySelector(".navmenu-backdrop");

  if (sideMenu.style.left === "0px") {
    sideMenu.style.left = "-291vh"; // Hide menu
    backdrop.style.display = "none"; // Hide backdrop
  } else {
    sideMenu.style.left = "0px"; // Show menu
    backdrop.style.display = "block"; // Show backdrop
  }
}

// nav scroller
const navCarouselUl = document.querySelector(".nav-crousel-ul");
const items = document.querySelectorAll(".inside-ul-li");
const totalItems = items.length;
let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  // Calculate the translation distance based on the current index
  const itemWidth = items[0].offsetWidth + 10; // Add margin-right
  const translation = -currentIndex * itemWidth;
  navCarouselUl.style.transform = `translateX(${translation}px)`;
}

// Function to scroll right
function scrollRight() {
  if (currentIndex < totalItems - 1) {
    currentIndex++;
    updateCarousel();
  }
}

// Function to scroll left
function scrollLeft() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

// Create scroll buttons
const leftButton = document.createElement("button");
leftButton.innerHTML = "&lt;";
leftButton.className = "left";
leftButton.onclick = scrollLeft;
document.querySelector(".nav-main-div").appendChild(leftButton);

const rightButton = document.createElement("button");
rightButton.innerHTML = "&gt;";
rightButton.className = "right";
rightButton.onclick = scrollRight;
document.querySelector(".nav-main-div").appendChild(rightButton);

// Initialize the carousel position
updateCarousel();

// last crousel
const mobCarouselTrack = document.querySelector('.mob-carousel-track');
const mobLeftBtn = document.querySelector('.mob-left-btn');
const mobRightBtn = document.querySelector('.mob-right-btn');
let mobScrollAmount = 0;
const mobItemWidth = document.querySelector('.mob-carousel-item').offsetWidth + 90; // Item width plus margin

mobLeftBtn.addEventListener('click', () => {
    mobScrollAmount -= mobItemWidth;
    if (mobScrollAmount < 0) mobScrollAmount = 0;
    mobCarouselTrack.style.transform = `translateX(-${mobScrollAmount}px)`;
});

mobRightBtn.addEventListener('click', () => {
    const maxScroll = mobCarouselTrack.scrollWidth - document.querySelector('.mob-carousel-container').clientWidth;
    mobScrollAmount += mobItemWidth;
    if (mobScrollAmount > maxScroll) mobScrollAmount = maxScroll;
    mobCarouselTrack.style.transform = `translateX(-${mobScrollAmount}px)`;
});




function updateHeader() {
    const desktopHeader = document.getElementById('desktopview');
    const mobileHeader = document.getElementById('mobileview');

    // Get the window width
    const width = window.innerWidth;

    // Change headers based on width
    if (width <= 768) {
        desktopHeader.style.display = 'none';
        mobileHeader.style.display = 'block';
    } else {
        desktopHeader.style.display = 'block';
        mobileHeader.style.display = 'none';
    }
}

// Initial check on load
updateHeader();
// Add event listener for resize
window.addEventListener('resize', updateHeader);