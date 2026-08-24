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

    const heroImage = document.querySelector(".hero-image");
    if (heroImage) {
        gsap.to(heroImage, {
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
                trigger: heroImage,
                start: "top bottom", // when the top of the image enters the viewport from the bottom
                end: "bottom top", // when the bottom of the image leaves the viewport at the top
                scrub: true, // smooth scrubbing, takes the scroll position into account
                // markers: true,      // Uncomment to see the trigger markers for debugging
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

// const zoomSections = document.querySelectorAll(".js-zoom-section");

// zoomSections.forEach((section) => {
//     const wrapper = section.querySelector(".zoom-wrapper");

//     if (!wrapper) return;

//     gsap.fromTo(
//         wrapper,
//         {
//             scale: 1,
//             width: "100vw",
//             marginLeft: "0vw",
//         },
//         {
//             scale: 0.85,
//             // width: "93.3187vw",
//             // marginLeft: "3.3407vw",
//             ease: "none",
//             scrollTrigger: {
//                 trigger: section,
//                 start: "top top",
//                 end: "+=600",
//                 scrub: true,
//             },
//         }
//     );
// });

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
        repeat: -1,
    });
});

// two column animated
document.addEventListener("DOMContentLoaded", () => {
    // If #scroll-column-1 and #scroll-column-2 exist
    if (
        !document.getElementById("scroll-column-1") ||
        !document.getElementById("scroll-column-2")
    ) {
        return;
    }

    const columns = [
        { el: "#scroll-column-1", direction: -1 },
        { el: "#scroll-column-2", direction: 1 },
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
                y: gsap.utils.unitize((y) => parseFloat(y) % distance),
            },
        });
    });
});

// Studio Artists popups
// Biography shortcode
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", function () {
        const modalContentElement = this.querySelector(
            ".biography-modal-content"
        );
        const modalContent = modalContentElement
            ? modalContentElement.innerHTML
            : null;

        if (modalContent) {
            // Create overlay
            const overlay = document.createElement("div");
            overlay.className = "biography-modal-overlay";

            // Create modal
            const modal = document.createElement("div");
            modal.className = "biography-modal";

            const inner = document.createElement("div");
            inner.className = "biography-modal-inner";
            inner.innerHTML = modalContent;

            const close = document.createElement("div");
            close.className = "biography-modal-close";
            close.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        `;

            modal.appendChild(inner);
            modal.appendChild(close);
            document.body.appendChild(overlay);
            document.body.appendChild(modal);

            // Add transition
            setTimeout(() => {
                overlay.style.opacity = "1";

                if (window.innerWidth > 768) {
                    modal.style.opacity = "1";
                    modal.style.transform = "translate(-50%, -50%) scale(1)";
                } else {
                    modal.style.opacity = "1";
                    modal.style.top = "0";
                    modal.style.left = "0";
                    modal.style.width = "100%";
                    modal.style.height = "100%";
                    modal.style.transform = "none";
                }
            }, 10);

            const closeModal = () => {
                overlay.style.opacity = "0";

                if (window.innerWidth > 768) {
                    modal.style.opacity = "0";
                    modal.style.transform = "translate(-50%, -50%) scale(0.8)";
                } else {
                    modal.style.opacity = "0";
                }

                setTimeout(() => {
                    overlay.remove();
                    modal.remove();
                }, 300);
            };

            overlay.addEventListener("click", closeModal);
            close.addEventListener("click", closeModal);
        }
    });
});

// Promotional popup
document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-site-popup]");
    if (!root) return;

    const closeButton = root.querySelector(".site-popup-close");
    const config = {
        id: (root.dataset.popupId || "default").replace(/[^a-z0-9_-]/gi, "-"),
        trigger: root.dataset.trigger || "delay",
        delay: Number(root.dataset.delay || 3) * 1000,
        scrollPercent: Number(root.dataset.scrollPercent || 25),
        dismiss: root.dataset.dismiss || "7",
        showOn: root.dataset.showOn || "all",
        specificIds: (root.dataset.specificIds || "")
            .split(",")
            .map((id) => id.trim())
            .filter(Boolean),
        currentId: root.dataset.currentId || "",
        isHomepage: root.dataset.isHomepage === "1",
        hideOnMobile: root.dataset.hideOnMobile === "1",
        startDate: root.dataset.startDate || "",
        endDate: root.dataset.endDate || "",
    };
    const storageKey = `gcca-popup:${config.id}`;
    let lastFocus = null;
    let opened = false;

    const parseDate = (value, endOfDay = false) => {
        if (!value) return null;
        const parts = value.split("-").map(Number);
        if (parts.length >= 3 && parts.every((part) => !Number.isNaN(part))) {
            const [year, month, day] = parts;
            return endOfDay
                ? new Date(year, month - 1, day, 23, 59, 59, 999)
                : new Date(year, month - 1, day, 0, 0, 0, 0);
        }
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    };

    const isWithinSchedule = () => {
        const now = new Date();
        const start = parseDate(config.startDate);
        const end = parseDate(config.endDate, true);
        if (start && now < start) return false;
        if (end && now > end) return false;
        return true;
    };

    const shouldShowOnThisPage = () => {
        if (config.showOn === "homepage") return config.isHomepage;
        if (config.showOn === "specific") {
            return config.specificIds.includes(config.currentId);
        }
        return true;
    };

    const isDismissed = () => {
        if (config.dismiss === "session") {
            return sessionStorage.getItem(storageKey) === "1";
        }

        const stored = localStorage.getItem(storageKey);
        if (!stored) return false;
        if (config.dismiss === "forever") return true;

        try {
            const payload = JSON.parse(stored);
            const days = Number(config.dismiss);
            if (!days || !payload?.at) return true;
            return Date.now() - Number(payload.at) < days * 86400000;
        } catch {
            return true;
        }
    };

    const persistDismiss = () => {
        if (config.dismiss === "session") {
            sessionStorage.setItem(storageKey, "1");
            return;
        }
        localStorage.setItem(storageKey, JSON.stringify({ at: Date.now() }));
    };

    const getFocusable = () =>
        [...root.querySelectorAll('a[href], button:not([disabled])')].filter(
            (el) => !el.hasAttribute("disabled")
        );

    const trapFocus = (event) => {
        if (event.key !== "Tab" || !opened) return;
        const focusable = getFocusable();
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    const openPopup = () => {
        if (opened) return;
        opened = true;
        lastFocus = document.activeElement;
        root.classList.add("is-open");
        root.setAttribute("aria-hidden", "false");
        root.removeAttribute("inert");
        document.body.classList.add("popup-open");
        if (typeof lenis?.stop === "function") lenis.stop();
        window.setTimeout(() => closeButton?.focus(), 50);
        document.addEventListener("keydown", onKeyDown);
    };

    const closePopup = () => {
        if (!opened) return;
        opened = false;
        persistDismiss();
        root.classList.remove("is-open");
        root.setAttribute("aria-hidden", "true");
        root.setAttribute("inert", "");
        document.body.classList.remove("popup-open");
        if (typeof lenis?.start === "function") lenis.start();
        document.removeEventListener("keydown", onKeyDown);
        if (lastFocus && typeof lastFocus.focus === "function") {
            lastFocus.focus();
        }
    };

    const onKeyDown = (event) => {
        if (event.key === "Escape") {
            closePopup();
            return;
        }
        trapFocus(event);
    };

    const tryShow = () => {
        if (document.body.classList.contains("offcanvas-open")) {
            window.setTimeout(tryShow, 400);
            return;
        }
        openPopup();
    };

    if (config.hideOnMobile && window.matchMedia("(max-width: 767px)").matches) {
        root.remove();
        return;
    }

    if (!isWithinSchedule() || !shouldShowOnThisPage() || isDismissed()) {
        root.remove();
        return;
    }

    root.querySelectorAll("[data-popup-dismiss]").forEach((el) => {
        el.addEventListener("click", (event) => {
            event.preventDefault();
            closePopup();
        });
    });

    root.querySelector("[data-popup-cta]")?.addEventListener("click", persistDismiss);

    if (config.trigger === "immediately") {
        window.setTimeout(tryShow, 400);
        return;
    }

    if (config.trigger === "scroll") {
        const onScroll = () => {
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            const percent =
                scrollable <= 0
                    ? 100
                    : (window.scrollY / scrollable) * 100;
            if (percent >= config.scrollPercent) {
                window.removeEventListener("scroll", onScroll);
                tryShow();
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        if (document.documentElement.scrollHeight <= window.innerHeight + 10) {
            window.setTimeout(tryShow, 1000);
        }
        return;
    }

    window.setTimeout(tryShow, Number.isFinite(config.delay) ? config.delay : 3000);
});
