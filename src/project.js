import { initializeTasks } from './tasks';

// eslint-disable-next-line import/no-mutable-exports
let activeProject;

function appendFormElements() {
  const form = document.querySelector('.new-project-form');
  const newProjectInput = document.createElement('input');
  const newProjectSubmit = document.createElement('input');
  newProjectInput.type = 'text';
  newProjectInput.id = 'new-project-input';
  newProjectSubmit.type = 'submit';
  newProjectSubmit.id = 'new-project-submit';
  newProjectSubmit.style.display = 'none';
  form.appendChild(newProjectInput);
  form.appendChild(newProjectSubmit);
}

function createInputElements() {
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('new-project-form');
  return newProjectForm;
}

function createProjectInput() {
  const newProjectForm = createInputElements();
  const newProjectBtn = document.getElementById('new-project-btn');
  newProjectBtn.parentNode.insertBefore(newProjectForm, newProjectBtn);
  appendFormElements();
}

const projectFactory = (name) => {
  const project = {};
  project.name = name;
  project.active = true;
  project.tasks = [];
  project.id = `projectID-${localStorage.length}`;
  return project;
};

function createNewProject(projectName) {
  const name = projectName;
  return projectFactory(name);
}

function removeNewProjectForm(e) {
  const formParentNode = e.path[2];
  const formNode = e.path[1];
  formParentNode.removeChild(formNode);
}

function addElementBeforeNewProjectBtn(elementToAdd) {
  const newProjectBtn = document.getElementById('new-project-btn');
  newProjectBtn.parentNode.insertBefore(elementToAdd, newProjectBtn);
}

function addToProjectList(projectName) {
  const projectListItem = document.createElement('button');
  projectListItem.id = projectName.toLowerCase().replace(' ', '-');
  projectListItem.textContent = projectName;
  projectListItem.classList.add('active');
  projectListItem.classList.add('sub-project-btn');
  addElementBeforeNewProjectBtn(projectListItem);
}

function storeProject(project) {
  localStorage.setItem(project.id, JSON.stringify(project));
}

function changePageHeaderToProject() {
  document.getElementById('page-header').textContent = `${activeProject.name} Tasks`;
}

function swapActiveProjects(project) {
  activeProject.active = false;
  localStorage.setItem(activeProject.id, JSON.stringify(activeProject));
  activeProject = project;
  if (!activeProject.active) {
    activeProject.active = true;
    localStorage.setItem(activeProject.id, JSON.stringify(activeProject));
  }
  changePageHeaderToProject();
  const taskElements = document.querySelectorAll('.task-container');
  taskElements.forEach((element) => element.remove());
  initializeTasks(true);
}

function addProjectNavListener() {
  document.querySelector('.projects-container').addEventListener('click', (e) => {
    for (let i = 0; i < localStorage.length; i += 1) {
      const project = JSON.parse(localStorage.getItem(`projectID-${i}`));
      if (project.name === e.target.textContent) {
        swapActiveProjects(project);
      }
    }
  });
}

function newProjectSubmitHandler(e) {
  e.preventDefault();
  const projectName = document.getElementById('new-project-input').value;
  const project = createNewProject(projectName);
  removeNewProjectForm(e);
  addToProjectList(project.name);
  storeProject(project);
  swapActiveProjects(project);
  addProjectNavListener();
}

function newProjectCreateListener() {
  document.getElementById('new-project-submit').addEventListener('click', newProjectSubmitHandler);
}

function initializeNewProjectInputs() {
  if (!document.querySelector('.new-project-form')) { createProjectInput(); }
  newProjectCreateListener();
}

function displayProjects() {
  for (let i = 1; i < localStorage.length; i += 1) {
    const project = JSON.parse(localStorage.getItem(`projectID-${i}`));
    const projectName = project.name;
    addToProjectList(projectName);
  }
}

function getActiveProject() {
  for (let i = 0; i < localStorage.length; i += 1) {
    const project = JSON.parse(localStorage.getItem(`projectID-${i}`));
    if (project.active === true) {
      return project;
    }
  }
  return localStorage.getItem('projectID-0');
}

function initalizeProjects() {
  if (localStorage.length === 0) {
    localStorage.setItem('projectID-0', JSON.stringify(createNewProject('My First Project')));
    activeProject = JSON.parse(localStorage.getItem('projectID-0'));
  } else if (localStorage.length === 1) {
    activeProject = JSON.parse(localStorage.getItem('projectID-0'));
  } else {
    activeProject = getActiveProject();
  }

  displayProjects();
  changePageHeaderToProject(activeProject.name);
  addProjectNavListener();
}

export {
  initalizeProjects, initializeNewProjectInputs, getActiveProject, activeProject,
};
