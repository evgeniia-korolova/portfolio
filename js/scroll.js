const scrollToTopLinks = document.querySelectorAll('.scroll-to-top__link');

scrollToTopLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const id = link.getAttribute('href').substring(1);

    const section = document.getElementById(id);

    if(section) {
      // section.scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth'
      // })
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
    });
    }    
  })
})