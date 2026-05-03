export const handlePageChange = (pageId) => {
    const pages = document.querySelectorAll('.section-view');
    
    pages.forEach(page => {        
        page.classList.add('hidden');
        page.classList.remove('fade-in');

        
        if (page.id === pageId) {
            page.classList.remove('hidden');
            
            requestAnimationFrame(() => {
                page.classList.add('fade-in');
            });
        }
    });
};