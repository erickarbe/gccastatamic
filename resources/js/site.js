// This is all you.

import Lenis from "lenis";
import enquire from "enquire.js";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
    const masthead = document.getElementById("masthead");
    if (window.scrollY >= 150) {
        masthead.classList.add("sticky");
    } else {
        masthead.classList.remove("sticky");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Initialize opener section animation
    const openerSection = document.querySelector(".opener");
    if (openerSection) {
        gsap.to(openerSection, {
            opacity: 0,
            scale: 0.8306,
            yPercent: 76.241,
            ease: "none",
            scrollTrigger: {
                trigger: openerSection,
                start: "top+=1 top",
                end: "bottom top",
                scrub: true,
                pin: false,
            },
        });
    }
    // Check scroll position on page load
    //checkScroll();

    // Check scroll position on scroll
    //window.addEventListener('scroll', checkScroll);

    // Menu toggle functionality
    const menuToggle = document.getElementById("ad-menu-toggle");
    const menuClose = document.getElementById("ad-menu-close");
    const offcanvas = document.getElementById("ad-offcanvas");
    const body = document.body;
    const html = document.documentElement;

    function toggleMenu(e) {
        e.preventDefault();
        menuToggle.classList.toggle("open");
        offcanvas.classList.toggle("active");
        body.classList.toggle("offcanvas-open");
        // html.classList.toggle("overflow-hidden");
    }

    // Add click event listeners to toggle buttons
    menuToggle?.addEventListener("click", toggleMenu);
    menuClose?.addEventListener("click", toggleMenu);

    // Listen for escape key to close menu
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && body.classList.contains("offcanvas-open")) {
            menuToggle?.classList.remove("active");
            menuClose?.classList.remove("active");
            offcanvas?.classList.remove("active");
            body.classList.remove("offcanvas-open");
            // html.classList.remove("overflow-hidden");
        }
    });

    // Add loaded class when page is fully loaded
    window.addEventListener("load", () => {
        body.classList.add("loaded");
    });
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



// full width media scroll
  gsap.registerPlugin(ScrollTrigger);

  const zoomSections = document.querySelectorAll(".js-zoom-section");

  zoomSections.forEach((section) => {
    const wrapper = section.querySelector(".zoom-wrapper");

    if (!wrapper) return;

    gsap.fromTo(wrapper, 
      {
        scale: 1,
        width: "100vw",
        marginLeft: "0vw"
      },
      {
        scale: 0.85,
        // width: "93.3187vw",
        // marginLeft: "3.3407vw",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=600",
          scrub: true
        }
      }
    );
  });



// Accordion block functionality
document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".faq-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const item = toggle.closest(".faq-item");
        const content = item.querySelector(".faq-content");
        const icon = toggle.querySelector(".faq-icon");

        const isOpen = !content.classList.contains("hidden");

        // Toggle visibility
        content.classList.toggle("hidden");

        // Animate icon
        icon.textContent = isOpen ? "+" : "–";
      });
    });
  });



// full width carousel
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // since we duplicated images

    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      duration: 40, // adjust for speed
      repeat: -1
    });
  });


// two column animated
document.addEventListener("DOMContentLoaded", () => {
    const columns = [
      { el: "#scroll-column-1", direction: -1 },
      { el: "#scroll-column-2", direction: 1 }
    ];

    columns.forEach(({ el, direction }) => {
      const wrapper = document.querySelector(el);
      const inner = wrapper.querySelector(".inner");

      // Wait until layout is ready
      const distance = inner.scrollHeight / 2;

      gsap.to(inner, {
        y: direction * -distance,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize(y => parseFloat(y) % distance)
        }
      });
    });
  });
