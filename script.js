// زر اللغة
const langBtn = document.getElementById("lang-toggle");
langBtn.addEventListener("click", () => {
  if (langBtn.textContent === "EN") {
    document.getElementById("name").textContent = "Awadh Al Darmaki";
    document.getElementById("title").textContent = "Poet · Writer · Speaker";
    langBtn.textContent = "AR";
    document.documentElement.setAttribute("dir", "ltr");
  } else {
    document.getElementById("name").textContent = "عوض بن حاسوم الدرمكي";
    document.getElementById("title").textContent = "شاعر · كاتب · متحدث";
    langBtn.textContent = "EN";
    document.documentElement.setAttribute("dir", "rtl");
  }
});

// زر الوضع الليلي
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
