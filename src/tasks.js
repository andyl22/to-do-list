import { setUpModalTemplate } from "./modal.js";
import { activeProject } from "./project.js";

function displayTasks(refreshPageBypass = false) {
    const taskList = activeProject.tasks

    if (taskList != []) {
        if (refreshPageBypass == true) {
            if (taskList) {
                taskList.forEach(task => taskController(task));}
            } else {
                let task = taskList[taskList.length-1];
                taskController(task);
            }
        }

    function taskController(task) {
            let taskDiv = document.createElement("div");
            taskDiv.className = "task-container";
            let name = document.createElement("h3");
            let dueDate = document.createElement("p");
            let description = document.createElement("p");
            name.textContent = task.name;
            dueDate.textContent = task.dueDate;
            description.textContent = task.name;
            taskDiv.appendChild(name);
            taskDiv.appendChild(dueDate);
            taskDiv.appendChild(description);
            let taskPriority = calculateTaskPriority(task.dueDate);
            displayTaskByPriority(taskPriority, taskDiv);
    }

    function calculateTaskPriority(taskElementDate) {
        const msPerDay = (1000 * 60 * 60 * 24);
        const currentDate = new Date().toISOString().split('T')[0];
        const currentTimeDifference = (new Date(taskElementDate) - new Date(currentDate)) / msPerDay;
        return (currentTimeDifference < -1) ? "priority-one" :
            (currentTimeDifference < 5) ? "priority-two" :
                "priority-three"
    }

    function displayTaskByPriority(taskPriority, taskDiv) {
        let priorityList = document.getElementById(taskPriority);

        (taskPriority == "priority-one") ? taskDiv.style.background = "rgb(255 230 230)" :
            (taskPriority == "priority-two") ? taskDiv.style.background = "rgb(255 244 219)" :
                taskDiv.style.background = "rgb(222 222 249)";

        priorityList.appendChild(taskDiv);
    }
}
function addTask(task) {
    activeProject.tasks.push(task);
}

function addTasksController() {
    setUpModalTemplate("Add To-Do");
    setupAddInputs();
    modalSubmitListener();
}

function setupAddInputs() {
    const modal = document.getElementById("modal-content");
    const form = createInputForm(modal);
    appendInputsToForm([["Name", "text"], ["Date", "date"], ["Description", "text"]], form);
    appendSubmitToForm(form)

    function createInputForm(modal) {
        let inputsContainer = document.createElement("form");
        inputsContainer.className = "modal-inputs"
        modal.appendChild(inputsContainer);
        return inputsContainer;
    }

    function appendInputsToForm(inputList, inputsContainer) {
        inputList.forEach(input => {
            let inputName = input[0];
            let inputType = input[1];
            const createdInput = createInputElements(inputName, inputType);
            const inputLabel = createdInput[0];
            const inputElement = createdInput[1];
            inputsContainer.appendChild(inputLabel);
            inputsContainer.appendChild(inputElement);
        });
    }

    function createInputElements(buttonName, type) {
        const input = document.createElement("input");
        const label = document.createElement("label");
        input.type = type;
        input.required = true;
        input.id = buttonName.toLowerCase();
        input.className = "modal-input";
        label.setAttribute("for", buttonName.toLowerCase());
        let capitalizedLetter = buttonName.charAt(0).toUpperCase();
        label.textContent = buttonName.replace(buttonName.charAt(0), capitalizedLetter);
        return [label, input];
    }

    function appendSubmitToForm(form) {
        const submit = document.createElement("input");
        submit.type = "submit";
        submit.id = "submit-modal";
        form.appendChild(submit);
    }
}

function modalSubmitListener() {
    const submit = document.getElementById("submit-modal");
    submit.addEventListener("click", addInputsHandler);
}

function addInputsHandler(e) {
    e.preventDefault();
    let [name, duedate, description] = getInputValues();
    let taskElement = taskFactory(name, duedate, description);
    storeTask(taskElement);
    displayTasks();
    cleanInputs();

    function getInputValues() {
        let name = document.getElementById("name").value;
        let date = document.getElementById("date").value;
        let description = document.getElementById("description").value;
        return [name, date, description];
    }

    function cleanInputs() {
        document.getElementById("name").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
    }

    function storeTask(taskElement) {
        addTask(taskElement);
        localStorage.setItem(activeProject.id, JSON.stringify(activeProject));
    }
}

const taskFactory = function (name, dueDate, description) {
    let task = {};
    task.name = name;
    task.dueDate = dueDate;
    task.description = description;
    task.createdDate = new Date(Date.now()).toString();

    return task;
}

export { displayTasks, addTasksController };