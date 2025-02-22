document.addEventListener('DOMContentLoaded', () => {
  console.log("Portfolio page loaded.");

  // Pobieramy elementy modalu
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.modal .close');

  // Dodajemy obsługę kliknięcia na obrazki z klasą zoomable
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  // Zamknięcie modalu przy kliknięciu na przycisk "X"
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Zamknięcie modalu przy kliknięciu na ciemny obszar poza obrazkiem
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
