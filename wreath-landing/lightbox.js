// lightbox.js
window.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = lightbox ? lightbox.querySelector(".lightbox__close") : null;

  // Safety checks
  if (!lightbox || !lightboxImg) return;

  function open(src, alt) {
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";

    // let CSS close animation finish
    setTimeout(() => {
      lightboxImg.removeAttribute("src");
    }, 220);
  }

  // Click any gallery image
  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.currentSrc || img.src || img.getAttribute("src");
      open(src, img.alt);
    });
  });

  // Close button (if exists)
  if (closeBtn) closeBtn.addEventListener("click", close);

  // Close on backdrop click
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });

  // ESC closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
});
