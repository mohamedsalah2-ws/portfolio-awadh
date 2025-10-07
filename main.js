// التبديل بين الوضعين (فاتح/داكن)
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// إرسال الرسالة (اختبار فقط)
function sendMessage(e) {
  e.preventDefault();
  alert("✅ تم إرسال رسالتك بنجاح!");
  e.target.reset();
}

// تأثير الظهور عند التمرير
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
