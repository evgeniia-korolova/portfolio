const tabs = (containerSelector, tabSelector, activeClass, callback) => {
    const container = document.querySelector(containerSelector);

    container.addEventListener('click', (e) => {
        const target = e.target.closest(tabSelector);
        if (target) {
            const tabs = container.querySelectorAll(tabSelector);
            tabs.forEach(t => t.classList.remove(activeClass));
            target.classList.add(activeClass);
            
            if (callback) {
                callback(target.dataset.target || target.textContent.trim());
            }
        }
    });
};
export default tabs;