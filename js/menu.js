const menu = () => {
  const burger = document.querySelector('.humburger-menu');
  const burgerIcon = document.querySelector('.ham');
  const menuItem = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.nav-item');

  const toggleScroll = (isMenuOpen) => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  };

  burger.addEventListener('click', () => {
    menuItem.classList.toggle('menu-active');
    burgerIcon.classList.toggle('active-ham');
    const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
    burger.setAttribute('aria-expanded', !expanded);
    const isOpen = menuItem.classList.contains('menu-active');
    toggleScroll(isOpen);
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuItem.classList.remove('menu-active');
      burgerIcon.classList.remove('active-ham');
      toggleScroll(false);
    });
  });

  document.addEventListener('click', (event) => {
    if (
      !(
        event.target.closest('.menu') ||
        event.target.closest('.humburger-menu') ||
        event.target.closest('#theme-toggle')
      )
    ) {
      menuItem.classList.remove('menu-active');
      burgerIcon.classList.remove('active-ham');
      burger.setAttribute('aria-expanded', 'false');
      toggleScroll(false);
    }
  });
};

export default menu;
