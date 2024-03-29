import { programmingProjects, audioProjects } from "./data/projects.js";
import { showProgrammingProject, showAudioProject } from "./utils.js";

const defaultCategory = "Programming Projects";

function showProjects(category) {
  const projectsContainer = document.querySelector(".projects-container");
  projectsContainer.innerHTML = "";

  const projects =
    category === defaultCategory ? programmingProjects : audioProjects;

  projects.forEach((project) => {
    let card;

    if (category === defaultCategory) {
      card = showProgrammingProject(project);
    } else {
      card = showAudioProject(project);
    }

    projectsContainer.insertAdjacentHTML("beforeend", card);
  });
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

document.addEventListener("DOMContentLoaded", () => {
  const projectsCategory = document.querySelector(".projects-nav__list");
  projectsCategory.addEventListener("click", handleProjectCategoryClick);

  setDefaultProjects();
});
