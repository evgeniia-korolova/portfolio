const tabs = (containerSelector, tabSelector, activeClass, callback) => {
  const container = document.querySelector(containerSelector);

  container.addEventListener('click', (e) => {
    const target = e.target.closest(tabSelector);
    if (target) {
      const tabs = container.querySelectorAll(tabSelector);
      tabs.forEach((t) => {
        t.classList.remove(activeClass);
        t.setAttribute('aria-selected', 'false');
      });
      target.classList.add(activeClass);
      target.setAttribute('aria-selected', 'true');

      if (callback) {
        callback(target.dataset.target || target.textContent.trim());
      }
    }
  });

  container.addEventListener('keydown', (e) => {
    const target = e.target.closest(tabSelector);
    if (!target) return;

    if (e.key === 'Enter' || e.key === ' ') {        
        if (target.tagName !== 'A') {
            e.preventDefault();
            target.click(); 
        }
    }
  });
};
export default tabs;
