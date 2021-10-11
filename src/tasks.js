import { setUpModalTemplate } from "./modal.js";
import { activeProject } from "./project.js";
import moment from "moment";

function initializeTasks(refreshPageBypass = false) {
    taskCreatorInitator();

    function taskCreatorInitator() {
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
        }

    function taskController(task) {
        let taskDiv = createTaskElements(task);
        let taskPriority = calculateTaskPriority(task.dueDate);
        displayTaskByPriority(taskPriority, taskDiv);
        addTaskDropDownListener(taskDiv);
    }

    function createTaskElements(task) {
        const taskDiv = document.createElement("div");
        const summaryInfo = document.createElement("div");
        const additionalInfoContainer = document.createElement("div");
        taskDiv.className = "task-container";
        summaryInfo.className = "summary-info-container"
        additionalInfoContainer.className = "additional-info-container"
        const name = document.createElement("p");
        const dueDate = document.createElement("p");
        const description = document.createElement("p");
        const dropDownArrow = document.createElement("i")
        name.className = "task-name";
        dropDownArrow.className = "task-name-dropdown";
        dropDownArrow.textContent = "▼";
        name.textContent = task.name + " ";
        dueDate.textContent = moment(task.dueDate).format("MMM Do YY"); ;
        description.textContent = task.name;
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
        return (currentTimeDifference < -1) ? "priority-one" :
            (currentTimeDifference < 5) ? "priority-two" :
                "priority-three"
    }

    function displayTaskByPriority(taskPriority, taskDiv) {
        let priorityList = document.getElementById(taskPriority);
        (taskPriority == "priority-one") ? taskDiv.childNodes[0].style.background = "rgb(255 230 230)" :
            (taskPriority == "priority-two") ? taskDiv.childNodes[0].style.background = "rgb(255 244 219)" :
            taskDiv.childNodes[0].style.background = "rgb(222 222 249)";

        priorityList.appendChild(taskDiv);
    }

    function addTaskDropDownListener(taskDiv) {
        taskDiv.childNodes[0].querySelector(".task-name-dropdown").addEventListener("click", toggleInfoDisplay)
    }

    function toggleInfoDisplay(e) {
        let nodeStyle = e.path[2].childNodes[1];
        if (nodeStyle.style.display == "" || nodeStyle.style.display == "none") {
            nodeStyle.style.display = "flex";
            e.target.textContent = "▲"
        } else {
            nodeStyle.style.display = "none";
            e.target.textContent = "▼"
        }
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
    initializeTasks();
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

export { initializeTasks, addTasksController };