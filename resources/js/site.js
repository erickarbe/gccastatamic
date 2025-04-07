// This is all you.

import Lenis from "lenis";
import enquire from "enquire.js";

// Initialize smooth scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Get all scroll animations
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

// Start the animation loop
requestAnimationFrame(raf);

// Function to check scroll position and toggle 'sticky' class
function checkScroll() {
    const masthead = document.getElementById('masthead');
    if (window.scrollY >= 150) {
        masthead.classList.add('sticky');
    } else {
        masthead.classList.remove('sticky');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Check scroll position on page load
    checkScroll();

    // Check scroll position on scroll
    window.addEventListener('scroll', checkScroll);
    // Intersection observer logic
    const observerCallback = function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("inview");
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
    );
    const targets = document.querySelectorAll(".js-show-on-scroll");
    targets.forEach(function (target) {
        observer.observe(target);
    });

    const menuItems = document.querySelectorAll(".offcanvas-nav .menu > li");
    const subMenuContainer = document.getElementById("sub-menu-container");
    let activeItem = null;
    const offcanvasMenu = document.querySelector(".offcanvas-menu");

    // Function to handle sub-menu display on mouseenter for desktop
    function handleMouseEnter(event) {
        updateSubMenu(event.currentTarget);
    }

    // Function to handle sub-menu display on click/touch for mobile
    function handleTap(event) {
        event.preventDefault();
        updateSubMenu(event.currentTarget);
        offcanvasMenu.classList.add("shift-left");
    }

    // Function to setup the sliding effect for mobile
    function setupSlidingEffect() {
        menuItems.forEach((item) => {
            item.addEventListener("click", handleTap);
            item.addEventListener("touchstart", handleTap);
        });
    }

    // Function to remove the sliding effect for mobile
    function removeSlidingEffect() {
        menuItems.forEach((item) => {
            item.removeEventListener("click", handleTap);
            item.removeEventListener("touchstart", handleTap);
        });
    }

    // Function to add mouseenter event listeners for desktop
    function setupMouseEnter() {
        menuItems.forEach((item) => {
            item.addEventListener("mouseenter", handleMouseEnter);
        });
    }

    // Function to remove mouseenter event listeners for desktop
    function removeMouseEnter() {
        menuItems.forEach((item) => {
            item.removeEventListener("mouseenter", handleMouseEnter);
        });
    }

    // Function to add the back link
    function addBackLink() {
        const backLink = document.createElement("a");
        backLink.href = "#";
        backLink.classList.add("back-link");
        backLink.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path></svg> Back';

        backLink.addEventListener("click", function (e) {
            e.preventDefault();
            offcanvasMenu.classList.remove("shift-left");
        });

        subMenuContainer.prepend(backLink);
    }

    // Function to update sub-menu content
    function updateSubMenu(item) {
        if (activeItem) {
            activeItem.classList.remove("active-item");
        }

        item.classList.add("active-item");
        activeItem = item;

        const subMenu = item.querySelector(".sub-menu");
        if (subMenu) {
            subMenuContainer.innerHTML = subMenu.outerHTML;
            addBackLink();
            subMenuContainer.style.display = "block";
        } else {
            subMenuContainer.style.display = "none";
        }
    }

    // Prevent the sub-menu from closing when moving the mouse within the sub-menu container
    subMenuContainer.addEventListener("mouseenter", function () {
        subMenuContainer.style.display = "block";
    });

    // Check for screen size using enquire.js
    enquire.register("screen and (max-width: 700px)", {
        match: function () {
            removeMouseEnter();
            setupSlidingEffect();
        },
        unmatch: function () {
            removeSlidingEffect();
            setupMouseEnter();
            offcanvasMenu.classList.remove("shift-left");
        },
    });

    setupMouseEnter();
});
