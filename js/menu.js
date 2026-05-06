const menu = () => {
  const burger = document.querySelector('.humburger-menu');
  const burgerIcon = document.querySelector('.ham');
  const menuItem = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.nav-link'); 

  const toggleMenu = (forceClose = false) => {
    const isOpening = forceClose ? false : !menuItem.classList.contains('menu-active');
    
    menuItem.classList.toggle('menu-active', isOpening);
    burgerIcon.classList.toggle('active-ham', isOpening);
    burger.setAttribute('aria-expanded', isOpening);    
    
    document.body.style.overflow = isOpening ? 'hidden' : '';
  };

  burger.addEventListener('click', () => toggleMenu());  

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.addEventListener('click', (event) => {
    if (
      !(
        event.target.closest('.menu') ||
        event.target.closest('.humburger-menu') ||
        event.target.closest('#theme-toggle')
      )
    ) {      
      toggleMenu(true);
    }
  });
};

export default menu;
