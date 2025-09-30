document.addEventListener("DOMContentLoaded", () => {
  /* ======== MOBILE NAVIGATION ======== */
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close"); // Added close button
  const navLinks = document.querySelectorAll(".nav__link");

  // Show menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  // Hide menu (using close button or clicking a link)
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  const linkAction = () => {
    navMenu.classList.remove("show-menu");
  };
  navLinks.forEach((link) => link.addEventListener("click", linkAction));

  /* ======== STICKY HEADER ON SCROLL ======== */
  const header = document.querySelector(".header");

  const stickyHeader = () => {
    if (window.scrollY >= 50) {
      // Adjust scroll threshold as needed
      header.classList.add("sticky-header");
    } else {
      header.classList.remove("sticky-header");
    }
  };
  window.addEventListener("scroll", stickyHeader);

  /* ======== SCROLL-INTO-VIEW ANIMATIONS ======== */
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: Unobserve after the animation has played to save resources
          // observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
