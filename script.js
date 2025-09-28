// إظهار الكروت مع التمرير (Scroll Animation)
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");

  function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200); // تأخير لكل كارت
      }
    });
  }

  window.addEventListener("scroll", showCards);
  showCards();
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Load dynamic content
fetch("portfolio.json")
  .then(res => res.json())
  .then(data => {
    // Works
    const worksContainer = document.querySelector("#portfolio .grid");
    worksContainer.innerHTML = data.works.map(work => `
      <div class="card">
        <a href="${work.link}" target="_blank">
          <img src="${work.image}" alt="${work.title}">
          <h3>${work.title}</h3>
        </a>
      </div>
    `).join("");

    // Books
    const booksContainer = document.querySelector("#books .list");
    booksContainer.innerHTML = data.books.map(book => `<li>${book}</li>`).join("");

    // Events
    const eventsContainer = document.querySelector("#events .timeline");
    eventsContainer.innerHTML = data.events.map(event => `
      <li>
        <span>🎤</span>
        <a href="${event.link}" target="_blank">${event.title}</a>
      </li>
    `).join("");
  });
