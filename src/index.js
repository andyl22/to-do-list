import "./index.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import {displayTasks, addTasksController} from "./tasks";

if (process.env.NODE_ENV == 'production') {
    console.log('Production mode!');
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode!');
}

function init() {
    displayTasks(true);
    document.getElementById("add-todo").addEventListener("click", addTasksController);
    document.querySelector(".projects-list-btn").addEventListener("click", projectDropdown);
    document.getElementById("toggle-sidenav").addEventListener("click", toggleList);
    document.getElementById("new-project-btn").addEventListener("click", () => console.log("test"));
}

function toggleList() {
    let navBar = document.getElementById("nav-bar");
    if (navBar.style.display == "" || navBar.style.display == "none") {
        document.getElementById("nav-bar").style.display = "flex";
        growAnimation();
    } else {
        shrinkAnimation();
    }
}

const growAnimation = function () {
    document.getElementById("nav-bar").animate(
        { opacity: [0, 0.3, 1] },
        {
            duration: 150
        })
}

const shrinkAnimation = function () {
    document.getElementById("nav-bar").animate(
        { opacity: [1, 0.3, 0] }
        , {
            duration: 150,
        }).onfinish = () => document.getElementById("nav-bar").style.display = "none";
}

function projectDropdown() {
    const dropdownContainer = document.querySelector(".projects-container");
    const projectsListContainer = document.querySelector(".projects-list-container");
    if (dropdownContainer.style.display == "" || dropdownContainer.style.display == "none") {
        dropdownContainer.style.display = "flex";
        document.querySelectorAll(".projects-list-container button").forEach(button => {
            button.classList.add("active");
        })
    } else {
        dropdownContainer.style.display = "none";
        projectsListContainer.classList.remove("active");
        document.querySelectorAll(".projects-list-container button").forEach(button => {
            button.classList.remove("active");
        })
    }
}

init();
