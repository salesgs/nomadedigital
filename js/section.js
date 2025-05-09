function observeSectionsFade() {
  const section1 = document.getElementById("section-1");
  const section2 = document.getElementById("section-2");
  const section3 = document.getElementById("section-3");
  const section4 = document.getElementById("section-4");
  const section5 = document.getElementById("section-5");
  const sections = [section1, section2,section3,section4,section5];
  const isSmallScreen = window.innerWidth <= 768;
  const thresholdValue = isSmallScreen ? 0.1 : 0.5;
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-section");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: thresholdValue
  });

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("DOMContentLoaded", observeSectionsFade);
