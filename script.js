const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// 🔄 تبديل اللغة
langToggle.addEventListener("click", () => {
  document.querySelectorAll("[lang]").forEach(el => {
    el.classList.toggle("hidden");
  });

  langToggle.textContent = langToggle.textContent === "EN" ? "AR" : "EN";

  // تغيير اتجاه الصفحة
  if (document.documentElement.getAttribute("dir") === "rtl") {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
  } else {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  }
});

// 🌙 تبديل الوضع
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";

  // حفظ الاختيار
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  themeToggle.textContent = "☀️";
}
