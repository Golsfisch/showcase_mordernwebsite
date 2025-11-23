// ===== Navigation Toggle (Mobile Menu) =====
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
    navList.classList.remove("open"); // Menü schließen nach Klick
  });
});

// ===== Kontaktformular (Fake Demo) =====
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze.");
    form.reset();
  });
}
