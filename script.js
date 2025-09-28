// elements
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

// set theme from localStorage (default light)
function setTheme(mode){
  if(mode === 'dark'){
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
    localStorage.setItem('siteTheme', 'dark');
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '🌙';
    localStorage.setItem('siteTheme', 'light');
  }
}

// set language: 'ar' or 'en'
function setLanguage(lang){
  // blocks inside body with .lang and lang-ar / lang-en classes
  document.querySelectorAll('.lang').forEach(block => {
    if(block.classList.contains('lang-ar')) {
      block.classList.toggle('hidden', lang !== 'ar');
    } else if(block.classList.contains('lang-en')) {
      block.classList.toggle('hidden', lang !== 'en');
    }
  });

  // titles and roles
  document.querySelectorAll('.title-ar, .role-ar').forEach(el => el.classList.toggle('hidden', lang !== 'ar'));
  document.querySelectorAll('.title-en, .role-en').forEach(el => el.classList.toggle('hidden', lang !== 'en'));

  // dir/lang on html element
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'ar');
  document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

  // toggle button text
  langToggle.textContent = (lang === 'ar') ? 'EN' : 'العربية';

  // save
  localStorage.setItem('siteLang', lang);
}

// initialize UI from saved preferences
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('siteTheme') || 'light';
  setTheme(savedTheme);

  const savedLang = localStorage.getItem('siteLang') || 'ar';
  setLanguage(savedLang);
});

// theme toggle handler
themeToggle.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newTheme);
});

// language toggle handler
langToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'ar';
  const next = current === 'ar' ? 'en' : 'ar';
  setLanguage(next);
});
