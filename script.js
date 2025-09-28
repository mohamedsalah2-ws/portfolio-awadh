const langToggle = document.getElementById("lang-toggle");
const htmlEl = document.documentElement;

// Helper: show only elements with targetLang
function setLanguage(targetLang) {
  document.querySelectorAll("body [lang]").forEach(el => {
    const elLang = el.getAttribute("lang");
    if (elLang === targetLang) {
      el.classList.remove("hidden");
    } else {
      el.classList.add("hidden");
    }
  });

  // adjust document direction
  htmlEl.setAttribute("lang", targetLang);
  htmlEl.setAttribute("dir", targetLang === "ar" ? "rtl" : "ltr");

  // change button text
  langToggle.textContent = targetLang === "ar" ? "EN" : "AR";

  // save selection
  localStorage.setItem("siteLang", targetLang);
}

langToggle.addEventListener("click", () => {
  const currentLang = htmlEl.getAttribute("lang") === "en" ? "en" : "ar";
  const nextLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(nextLang);
});

// init
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("siteLang");
  const initial = saved ? saved : (htmlEl.getAttribute("lang") || "ar");
  setLanguage(initial);
});
