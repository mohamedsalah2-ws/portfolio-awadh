const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

langToggle.addEventListener("click", () => {
  if (langToggle.textContent === "EN") {
    langToggle.textContent = "AR";
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
  } else {
    langToggle.textContent = "EN";
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }
});
