/* ============================================================
   Zahra Keshavarz Rezaei — academic site
   Vanilla JS: current year + scroll-reveal animation.
   (Fixed light theme — no theme toggle.)
============================================================ */
(function () {
  "use strict";

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Scroll reveal ---------- */
  var items = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: reveal everything immediately
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
