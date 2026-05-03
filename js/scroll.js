export const scroll = () => {
  const scrollBtn = document.querySelector('.scroll-to-top__link');
  if (!scrollBtn) return;

  const checkHeight = () => {
    const fullHeight = document.documentElement.scrollHeight;
    const screenHeight = window.innerHeight;

    if (fullHeight > screenHeight && window.scrollY > 100) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  };

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', checkHeight);
  window.addEventListener('resize', checkHeight);

  return checkHeight;
};

export default scroll;
