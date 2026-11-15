/**
 * TEDxEmiratesHills — Official Main Website Scripts
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => preloader.remove(), 600);
      }, 400);
    });
    // Fallback if load already fired
    setTimeout(() => {
      if (preloader && !preloader.classList.contains("fade-out")) {
        preloader.classList.add("fade-out");
      }
    }, 1500);
  }

  // 2. Hero Background Slideshow (5 Stage Photos)
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 5000);
  }

  // 3. Mobile Navigation Toggle
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mainNav = document.getElementById("main-nav-menu");
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });

    // Close on link click
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
      });
    });
  }

  // 4. Lightbox for Media Gallery
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (lightbox && lightboxImg && galleryItems.length) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        if (!img) return;
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "TEDx Moment";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("active");
      document.body.style.overflow = "";
      setTimeout(() => {
        lightboxImg.src = "";
      }, 300);
    };

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        closeLightbox();
      }
    });
  }
});
