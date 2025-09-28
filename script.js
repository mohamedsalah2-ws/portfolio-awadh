// script.js (استبدل كامل الملف بهذا)
const langToggle = document.getElementById("lang-toggle");
const htmlEl = document.documentElement; // <html>
const body = document.body;

// Helper: show only elements with lang === targetLang, hide others (only inside body)
function setLanguage(targetLang) {
  // اجعل النصوص داخل الـ body فقط تتغير (لا نلمس html)
  document.querySelectorAll("body [lang]").forEach(el => {
    const elLang = el.getAttribute("lang");
    if (elLang === targetLang) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  // عدّل خصائص المستند (dir, lang)
  htmlEl.setAttribute("lang", targetLang);
  htmlEl.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");

  // غيّر نص زر التبديل
  langToggle.textContent = targetLang === "ar" ? "EN" : "AR";

  // خزّن الاختيار
  localStorage.setItem("siteLang", targetLang);
}

// عند الضغط على زر اللغة: أقرا اللغة الحالية وانتقل للأخرى
langToggle.addEventListener("click", () => {
  const currentLang = htmlEl.getAttribute("lang") === "en" ? "en" : "ar";
  const nextLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(nextLang);
});

// INIT عند التحميل: استخدم القيمة المخزنة أو القيمة الافتراضية من <html>
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("siteLang");
  const initial = saved ? saved : (htmlEl.getAttribute("lang") === "en" ? "en" : "ar");
  setLanguage(initial);
});
