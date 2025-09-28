// زر التبديل بين الوضع الفاتح والغامق
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// تحميل الوضع المحفوظ مسبقاً من localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  body.classList.remove("light");
  icon.classList.replace("fa-moon", "fa-sun");
} else {
  body.classList.add("light");
}

// عند الضغط على الزر
toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
