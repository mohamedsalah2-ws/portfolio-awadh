const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

// 🔹 تغيير اللغة
function setLanguage(targetLang) {
  document.querySelectorAll("body [lang]").forEach(el => {
    const elLang = el.getAttribute("lang");
    el.classList.toggle("hidden", elLang !== targetLang);
  });

  htmlEl.setAttribute("lang", targetLang);
  htmlEl.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");

  langToggle.textContent = targetLang === "ar" ? "EN" : "AR";
  localStorage.setItem("siteLang", targetLang);
}

langToggle.addEventListener("click", () => {
  const currentLang = htmlEl.getAttribute("lang") === "en" ? "en" : "ar";
  setLanguage(currentLang === "ar" ? "en" : "ar");
});

// 🔹 تغيير الثيم
function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  themeToggle.textContent = mode === "dark" ? "☀️" : "🌙";
  localStorage.setItem("siteTheme", mode);
}

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
  setTheme(newTheme);
});

// 🔹 تهيئة عند التحميل
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "ar";
  const savedTheme = localStorage.getItem("siteTheme") || "light";

  setLanguage(savedLang);
  setTheme(savedTheme);
});
