const renderProjects = (data, containerSelector) => {
  const container = document.querySelector(containerSelector);

  container.innerHTML = '';

  data.forEach((project, index) => {
    const tagsHtml = project.tags
      .map((tag) => `<li class="tags-item">${tag}</li>`)
      .join('');

    const cardHtml = `
            <div class="card card-animate" style="animation-delay: ${
              index * 0.1}s" data-id="${project.id}">
                <div class="image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="card-image" />
                </div>
                <div class="card-info">
                    <h3 class="card-title accent">${project.title}</h3>
                    <ul class="tags">
                        ${tagsHtml}
                    </ul>
                </div>
                <div class="actions-wrapper">
                    <button type="button" class="feature__link">
                        <div class="feature-item-wrap">
                            <span class="feature-item__title">Show details</span>
                        </div>
                    </button>
                    <div class="card-overlay">
                        <div class="overlay-content">
                            <p class="card-description">${
                              project.description
                            }</p>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <a href="${
                          project.links.code
                        }" class="project-link" target="_blank">
                            <img src="./assets/icons/code.svg" alt="code-icon" class="project-link-icon" />
                            <span class="project-link-text">Code</span>
                        </a>
                        <a href="${
                          project.links.demo
                        }" class="project-link" target="_blank">
                            <img src="./assets/icons/demo.svg" alt="demo-svg" class="project-link-icon" />
                            <span class="project-link-text">Demo</span>
                        </a>
                    </div>
                </div>
            </div>
        `;

    container.insertAdjacentHTML('beforeend', cardHtml);
  });
};

export default renderProjects;
