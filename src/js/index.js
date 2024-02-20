import { programmingProjects, audioProjects } from "./projects.js";

const defaultCategory = "Programming Projects";

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects");
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
            <a class="card__link__demo" href="${
              project.preview
            }" target="_blank" rel="noopener noreferrer">
              ${project.video.available ? "Watch Demo" : "Preview Site"}
            </a>
            <a class="card__link__code" href="${
              project.repo
            }" target="_blank" rel="noopener noreferrer">
              View Code
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      `;

      projectsContainer.insertAdjacentHTML("beforeend", card);
    });

    window.scrollTo(0, scrollPosition);
  }

  function makeActive(clickedLink) {
    const links = document.querySelectorAll(".projects__category__link");
    links.forEach((link) => link.classList.remove("active"));
    clickedLink.classList.add("active");
  }

  function handleProjectCategoryClick(e) {
    if (e.target.classList.contains("projects__category__link")) {
      const link = e.target;
      const category = e.target.textContent;
      makeActive(link);
      showProjects(category);
    }
  }

  function setDefaultProjects() {
    showProjects(defaultCategory);
  }

  const projectsCategory = document.querySelector(".projects__category");
  projectsCategory.addEventListener("click", handleProjectCategoryClick);

  setDefaultProjects();
});
