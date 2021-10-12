import moment from 'moment';
import { setUpModalTemplate } from './modal';
import { activeProject } from './project';

function initializeTasks(refreshPageBypass = false) {
  function createTaskElements(task) {
    const taskDiv = document.createElement('div');
    const summaryInfo = document.createElement('div');
    const additionalInfoContainer = document.createElement('div');
    taskDiv.className = 'task-container';
    summaryInfo.className = 'summary-info-container';
    additionalInfoContainer.className = 'additional-info-container';
    const name = document.createElement('p');
    const dueDate = document.createElement('p');
    const description = document.createElement('p');
    const dropDownArrow = document.createElement('i');
    const summaryPriorityIndicator = document.createElement('div');
    summaryPriorityIndicator.className = 'priority-color-indicator';
    name.className = 'task-name';
    dropDownArrow.className = 'task-name-dropdown';
    dropDownArrow.textContent = '▼';
    name.textContent = `${task.name} `;
    dueDate.textContent = moment(task.dueDate).format('MMM Do YY');
    description.textContent = task.description;
    summaryInfo.appendChild(summaryPriorityIndicator);
    summaryInfo.appendChild(dueDate);
    summaryInfo.appendChild(name);
    summaryInfo.append(dropDownArrow);
    additionalInfoContainer.appendChild(description);
    taskDiv.appendChild(summaryInfo);
    taskDiv.appendChild(additionalInfoContainer);
    return taskDiv;
  }

  function calculateTaskPriority(taskElementDate) {
    const msPerDay = (1000 * 60 * 60 * 24);
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTimeDifference = (new Date(taskElementDate) - new Date(currentDate)) / msPerDay;
    if (currentTimeDifference < -1) {
      return 'priority-one';
    } if (currentTimeDifference < 5) {
      return 'priority-two';
    // eslint-disable-next-line no-else-return
    } else {
      return 'priority-three';
    }
  }

  function displayTaskByPriority(taskPriority, taskDiv) {
    const priorityList = document.getElementById(taskPriority);
    if (taskPriority === 'priority-one') {
      // eslint-disable-next-line no-param-reassign
      taskDiv.childNodes[0].childNodes[0].style.background = 'rgb(241 93 93)';
    } else if (taskPriority === 'priority-two') {
      // eslint-disable-next-line no-param-reassign
      taskDiv.childNodes[0].childNodes[0].style.background = 'rgb(255 158 76)';
    } else {
      // eslint-disable-next-line no-param-reassign
      taskDiv.childNodes[0].childNodes[0].style.background = 'rgb(112 112 253)';
    }

    priorityList.appendChild(taskDiv);
  }

  function toggleInfoDisplay(e) {
    const nodeStyle = e.path[2].childNodes[1];
    if (nodeStyle.style.display === '' || nodeStyle.style.display === 'none') {
      nodeStyle.style.display = 'flex';
      e.target.textContent = '▲';
    } else {
      nodeStyle.style.display = 'none';
      e.target.textContent = '▼';
    }
  }

  function addTaskDropDownListener(taskDiv) {
    taskDiv.childNodes[0].querySelector('.task-name-dropdown').addEventListener('click', toggleInfoDisplay);
  }

  function taskController(task) {
    const taskDiv = createTaskElements(task);
    console.log(task);
    const taskPriority = calculateTaskPriority(task.dueDate);
    displayTaskByPriority(taskPriority, taskDiv);
    addTaskDropDownListener(taskDiv);
  }

  function taskCreatorInitator() {
    const taskList = activeProject.tasks;
    if (taskList !== []) {
      if (refreshPageBypass === true) {
        if (taskList) {
          taskList.forEach((task) => taskController(task));
        }
      } else {
        const task = taskList[taskList.length - 1];
        taskController(task);
      }
    }
  }

  taskCreatorInitator();
}

function addTask(task) {
  activeProject.tasks.push(task);
}

function setupAddInputs() {
  function createInputForm(modal) {
    const inputsContainer = document.createElement('form');
    inputsContainer.className = 'modal-inputs';
    modal.appendChild(inputsContainer);
    return inputsContainer;
  }

  function createTextArea() {
    const textArea = document.createElement('textarea');
    const textAreaLabel = document.createElement('label');
    textArea.id = 'description';
    textAreaLabel.textContent = 'Description';
    textAreaLabel.setAttribute('for', 'description');
    textArea.setAttribute('required', true);
    return [textArea, textAreaLabel];
  }

  function createInputElements(buttonName, type) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.type = type;
    input.required = true;
    input.id = buttonName.toLowerCase();
    input.className = 'modal-input';
    label.setAttribute('for', buttonName.toLowerCase());
    const capitalizedLetter = buttonName.charAt(0).toUpperCase();
    label.textContent = buttonName.replace(buttonName.charAt(0), capitalizedLetter);
    return [label, input];
  }

  function appendInputsToForm(inputList, inputsContainer) {
    inputList.forEach((input) => {
      const inputName = input[0];
      const inputType = input[1];
      const createdInput = createInputElements(inputName, inputType);
      const inputLabel = createdInput[0];
      const inputElement = createdInput[1];
      inputsContainer.appendChild(inputLabel);
      inputsContainer.appendChild(inputElement);
    });
  }

  function appendSubmitToForm(form) {
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'submit-modal';
    form.appendChild(submit);
  }

  const modal = document.getElementById('modal-content');
  const form = createInputForm(modal);
  appendInputsToForm([['Name', 'text'], ['Date', 'date']], form);
  createTextArea().forEach((element) => form.appendChild(element));
  appendSubmitToForm(form);
}

// eslint-disable-next-line func-names
const taskFactory = function (name, dueDate, description) {
  const task = {};
  task.name = name;
  task.dueDate = dueDate;
  task.description = description;
  task.createdDate = new Date(Date.now()).toString();

  return task;
};

function addInputsHandler(e) {
  function getInputValues() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    return [name, date, description];
  }

  function cleanInputs() {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('description').value = '';
  }

  function storeTask(task) {
    addTask(task);
    localStorage.setItem(activeProject.id, JSON.stringify(activeProject));
  }

  e.preventDefault();
  const [taskName, taskDate, taskDescription] = getInputValues();
  const taskElement = taskFactory(taskName, taskDate, taskDescription);
  storeTask(taskElement);
  initializeTasks();
  cleanInputs();
}

function modalSubmitListener() {
  const form = document.querySelector('.modal-inputs');
  form.addEventListener('submit', addInputsHandler);
}

function addTasksController() {
  setUpModalTemplate('Add To-Do');
  setupAddInputs();
  modalSubmitListener();
}

export { initializeTasks, addTasksController };
