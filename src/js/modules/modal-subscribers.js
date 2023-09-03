export function modalSubscribers() {
  const openButton = document.querySelector('.community__subscribers-btn');
  const closeButton = document.querySelector('.modal-subscribers-close');
  const modal = document.querySelector(openButton.dataset.target);
  const modalDialog = document.querySelector('.modal-subscribers__dialog');

  openButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modalDialog.addEventListener('click', (event) => {
    event._isClickWithinModal = true;
  });

  modal.addEventListener('click', (event) => {
    if (event._isClickWithinModal) {
      return;
    }
    modal.style.display = 'none';
  });
}
