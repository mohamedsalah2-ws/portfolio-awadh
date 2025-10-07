// Dark Mode toggle
const toggle = document.getElementById('darkToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Contact form (demo)
function sendMessage(e) {
  e.preventDefault();
  alert("تم إرسال رسالتك بنجاح! ✅");
}
