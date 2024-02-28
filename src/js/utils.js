const textForWebsite = "Preview Site";
const textForVideo = "Watch Demo";

export function showProgrammingProject(project) {
  const card = `
    <div class="card">
      <h3 class="card__title">${project.title}</h3>
      <p class="card__description">${project.description}</p>
      <div class="card__link">
        ${
          project.website.available
            ? `<a 
                  class="card__link__website" 
                  href="${project.website.url}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ${textForWebsite}
                </a>`
            : project.video.available
            ? `<a 
                  class="card__link__website" 
                  href="${project.video.url}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  ${textForVideo}
                </a>`
            : ""
        }
        <a 
          class="card__link__code" 
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
      <div class="card__link">
        <a 
          class="card__link__website" 
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
