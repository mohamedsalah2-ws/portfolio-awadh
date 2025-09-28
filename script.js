document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");

  function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200); // تأخير تدريجي
      }
    });
  }

  window.addEventListener("scroll", showCards);
  showCards();
});
