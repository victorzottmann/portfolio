import { programmingProjects, audioProjects } from "./projects.js";

const defaultCategory = "Programming Projects";
const textForWebsite = "Preview Site";
const textForVideo = "Watch Demo";

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects-container");
  let scrollPosition = 0;

  function showProjects(category) {
    scrollPosition = window.scrollY;

    projectsContainer.innerHTML = "";

    const projects =
      category === defaultCategory ? programmingProjects : audioProjects;

    projects.forEach((project) => {
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

      projectsContainer.insertAdjacentHTML("beforeend", card);
    });

    window.scrollTo(0, scrollPosition);
  }

  function makeActive(clickedItem) {
    const listItems = document.querySelectorAll(".projects-nav__item");
    listItems.forEach((item) => item.classList.remove("active"));
    clickedItem.classList.add("active");
  }

  function handleProjectCategoryClick(e) {
    if (e.target.classList.contains("projects-nav__item")) {
      const item = e.target;
      const category = e.target.textContent;
      makeActive(item);
      showProjects(category);
    }
  }

  function setDefaultProjects() {
    showProjects(defaultCategory);
  }

  const projectsCategory = document.querySelector(".projects-nav__list");
  projectsCategory.addEventListener("click", handleProjectCategoryClick);

  setDefaultProjects();
});
