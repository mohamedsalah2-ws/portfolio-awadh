// تبديل اللغة
const langBtn = document.getElementById("langBtn");
let currentLang = "ar";

const translations = {
  en: {
    home: "Home",
    about: "About",
    works: "Works",
    contact: "Contact",
    welcome: "Welcome to Awad Website",
    desc: "Here you will find all details about our services and projects.",
    articles: "Articles & News"
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    works: "الأعمال",
    contact: "تواصل",
    welcome: "مرحباً بك في موقع عوض",
    desc: "هنا هتلاقي كل التفاصيل عن خدماتنا وأعمالنا المميزة.",
    articles: "مقالات وأخبار"
  }
};

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  langBtn.textContent = currentLang === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[currentLang][key];
  });
});

// تبديل الوضع (فاتح/غامق)
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
