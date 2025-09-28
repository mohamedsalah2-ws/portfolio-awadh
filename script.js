// عناصر
const body = document.body;
const themeBtn = document.getElementById("theme-toggle");
const langBtn = document.getElementById("lang-toggle");

// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}

// تبديل الوضع
themeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  }
});

// تبديل اللغة
langBtn.addEventListener("click", () => {
  const ar = document.querySelectorAll(".lang-ar");
  const en = document.querySelectorAll(".lang-en");
  if (body.getAttribute("dir") === "rtl") {
    body.setAttribute("dir", "ltr");
    body.setAttribute("lang", "en");
    ar.forEach(el => el.classList.add("hidden"));
    en.forEach(el => el.classList.remove("hidden"));
    langBtn.textContent = "العربية";
  } else {
    body.setAttribute("dir", "rtl");
    body.setAttribute("lang", "ar");
    en.forEach(el => el.classList.add("hidden"));
    ar.forEach(el => el.classList.remove("hidden"));
    langBtn.textContent = "English";
  }
});
