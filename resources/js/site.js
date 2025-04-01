// This is all you.

import Lenis from "lenis";

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
