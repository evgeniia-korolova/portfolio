const modalBtn = document.querySelector('.contact-btn');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.overlay');
const modalClose = modal.querySelector('.modal__close');

modalBtn.addEventListener('click', () => {
  modal.classList.add('modal-active');
})

overlay.addEventListener('click', ()=> {
   modal.classList.remove('modal-active');
})
modalClose.addEventListener('click', ()=> {
   modal.classList.remove('modal-active');
})

