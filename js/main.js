const openBtn = document.querySelector('.open-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.modal__close-btn');

const closeModal = () => {
  modal.classList.remove('active');
};

openBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);