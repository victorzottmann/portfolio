import { programmingProjects, audioProjects } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.querySelector(".projects");
  let scrollPosition = 0;

  function showProjects(category) {
    scrollPosition = window.scrollY;

    projectsContainer.innerHTML = "";

    const projects =
      category === "Programming Projects" ? programmingProjects : audioProjects;

    projects.forEach((project) => {
      const card = `
        <div class="card">
          <h3 class="card__title">${project.title}</h3>
          <p class="card__description">${project.description}</p>
          <div class="card__link">
            <a class="card__link__demo" href="${
              project.preview
            }" target="_blank" rel="noopener noreferrer">
              ${project.video ? "Watch Demo" : "Preview Site"}
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

  document.querySelectorAll(".projects__category__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.textContent;
      showProjects(category);
    });
  });

  showProjects("Programming Projects");
});
