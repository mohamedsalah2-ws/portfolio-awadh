// Dark / Light Mode Toggle
const modeBtn = document.getElementById("modeToggle");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Language Toggle
const langBtn = document.getElementById("langToggle");
langBtn.addEventListener("click", () => {
  if (document.documentElement.lang === "ar") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    langBtn.textContent = "العربية";
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    langBtn.textContent = "English";
  }
});
