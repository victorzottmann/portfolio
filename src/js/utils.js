const textForWebsite = "Preview Site";
const textForVideo = "Watch Demo";

export function showProgrammingProject(project) {
  const card = `
    <div class="card">
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description}</p>
      <div class="card__links__group">
        ${
          project.website.available
            ? `<a 
                  class="card__link" 
                  href="${project.website.url}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ${textForWebsite}
                </a>`
            : project.video.available
            ? `<a 
                  class="card__link" 
                  href="${project.video.url}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ${textForVideo}
                </a>`
            : ""
        }
        <a 
          class="card__link" 
          href="${project.code}" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  `;

  return card;
}

export function showAudioProject(project) {
  const card = `
    <div class="card">
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description}</p>
      <div class="card__links__group">
        <a 
          class="card__link" 
          href="${project.url}" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Preview
        </a>
      </div>
    </div>
  `;

  return card;
}
