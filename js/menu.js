const menu = () => {
  const burger = document.querySelector('.humburger-menu');
  const menuItem = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.nav-item');

  burger.addEventListener('click', () => {
    menuItem.classList.add('menu-active');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuItem.classList.remove('menu-active');
    });
  });

  document.addEventListener('click', (event) => {
    if (
      !(
        event.target.closest('.menu') || event.target.closest('.humburger-menu')
      )
    ) {
      menuItem.classList.remove('menu-active');
    }
  });
};

export default menu;
