const toggleTheme = () => {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const supported = typeof document.startViewTransition === 'function';

  const currentTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(currentTheme);

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.setAttribute('aria-checked', theme === 'light' ? 'true' : 'false');
  }

  toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';

    const rect = toggle.getBoundingClientRect();
    root.style.setProperty('--vt-x', rect.left + rect.width / 2 + 'px');
    root.style.setProperty('--vt-y', rect.top + rect.height / 2 + 'px');

    if (supported) {
      document.startViewTransition({
        update: () => applyTheme(nextTheme),
        types: ['theme'],
      });
    } else {
      applyTheme(nextTheme);
    }
  });
};

export default toggleTheme;
