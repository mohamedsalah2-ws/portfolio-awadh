// زر تغيير اللغة
const langToggle = document.getElementById("lang-toggle");
const modeToggle = document.getElementById("mode-toggle");

let currentLang = "ar";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  langToggle.textContent = currentLang === "ar" ? "English" : "عربي";

  document.querySelectorAll("[data-ar]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
});

// زر الوضع الليلي
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
