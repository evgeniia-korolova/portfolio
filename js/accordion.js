const accordeon = document.querySelector('.cards');
const accrordionBtns = document.querySelectorAll('.feature__link');


accrordionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const overlay = btn.nextElementSibling;
    const isActive = btn.classList.contains('feature__link-active');

    accrordionBtns.forEach(button => {
      button.classList.remove('feature__link-active');
      button.nextElementSibling.classList.remove('card-overlay-active')
    })
    if (!isActive) {
      btn.classList.add('feature__link-active');
      overlay.classList.add('card-overlay-active');
    }
  })
})

