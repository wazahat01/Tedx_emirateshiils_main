/**
 * TEDxEmiratesHills Main Website - Official JavaScript
 * Fast, lightweight, zero-dependency client interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initMobileMenu();
  initHeaderScroll();
  initModals();
  initGalleryLightbox();
  initSmoothScroll();
});

/**
 * Preloader Fade Out
 */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  const hidePreloader = () => {
    preloader.classList.add("fade-out");
    setTimeout(() => preloader.remove(), 600);
  };

  if (document.readyState === "complete") {
    setTimeout(hidePreloader, 300);
  } else {
    window.addEventListener("load", () => {
      setTimeout(hidePreloader, 200);
    });
  }
}

/**
 * Header Scroll Effects
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
}

/**
 * Mobile Hamburger Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("main-nav-menu");
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isExpanded = navMenu.classList.contains("active");
    toggleBtn.setAttribute("aria-expanded", isExpanded);
  });

  // Close menu when clicking nav links
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target) && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/**
 * Smooth Anchor Navigation with Offset
 */
function initSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']:not([href='#'])");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetElem = document.querySelector(targetId);

      if (targetElem) {
        e.preventDefault();
        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
        const targetPos = targetElem.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
      }
    });
  });
}

/**
 * Modal Dialog (Free Pass / Book Now)
 */
function initModals() {
  const modal = document.getElementById("booking-modal");
  const openBtns = document.querySelectorAll(".open-modal-trigger");
  const closeBtns = document.querySelectorAll(".modal-close-trigger");

  if (!modal) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  };

  openBtns.forEach((btn) => btn.addEventListener("click", openModal));
  closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * Gallery Lightbox (for media.html)
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryItems = document.querySelectorAll(".gallery-item");

  if (!lightbox || !lightboxImg || !galleryItems.length) return;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Event Photo";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
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
