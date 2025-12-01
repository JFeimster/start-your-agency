/* --------------------------------------
   Fade-In Scroll Animations
   Author: Moonshine Capital
   Description:
   Adds smooth fade-up animations as sections,
   cards, and testimonials scroll into view.
-------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements to animate on scroll
  const fadeElements = document.querySelectorAll(
    ".fade-in, section, .card, .testimonial, .hero .overlay"
  );

  // Ensure elements are hidden initially
  fadeElements.forEach((el) => {
    el.classList.remove("visible");
  });

  // Set up Intersection Observer
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop re-triggering once visible
        }
      });
    },
    {
      threshold: 0.15, // How much of element must be visible
      rootMargin: "0px 0px -50px 0px", // Triggers just before element fully visible
    }
  );

  // Observe all fade-in targets
  fadeElements.forEach((el) => {
    appearOnScroll.observe(el);
  });

  // 🔁 Fallback for browsers without IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    fadeElements.forEach((el) => {
      el.classList.add("visible");
    });
  }
});

/* --------------------------------------
   Smooth Scroll (Optional enhancement)
-------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});
