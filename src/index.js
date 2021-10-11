import "./index.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { initializeTasks, addTasksController } from "./tasks";
import { projectDropdown, toggleList } from "./sidenav";
import { initalizeProjects,  initializeNewProjectInputs} from "./project";

if (process.env.NODE_ENV == 'production') {
    console.log('Production mode!');
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode!');
}

function init() {
    document.getElementById("add-todo").addEventListener("click", addTasksController);
    document.getElementById("toggle-sidenav").addEventListener("click", toggleList);
    document.querySelector(".projects-list-btn").addEventListener("click", projectDropdown);
    document.getElementById("new-project-btn").addEventListener("click", initializeNewProjectInputs);
    initalizeProjects();
    initializeTasks(true);
}

init();
