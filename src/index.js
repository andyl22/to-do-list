import "./index.css"

if (process.env.NODE_ENV == 'production') {
    console.log('Production mode!');
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode!');
}

function init() {
    document.getElementById("add-todo").addEventListener("click", addToDo);
}

function addToDo() {
    enableModalWindow();
    if(!document.getElementsByClassName("modal-input")[0]) {
        setUpModalContent();
    }
        

    function enableModalWindow() {
        setModalVisibility("visible");
        addModalListeners();
    }

    function disableModal() {
        setModalVisibility("hidden");
        removeModalListeners();
    }

    function setModalVisibility(visibility) {
        document.getElementById("modal").style.visibility = visibility;
    }

    function addModalListeners() {
        window.addEventListener("click", function (e) {(e.target.id == "modal") ? disableModal() : null;});
        document.getElementById("close-modal").addEventListener("click", disableModal);
    }

    function removeModalListeners() {
        window.removeEventListener("click", function (e) {(e.target.id == "modal") ? disableModal() : null;});
        document.getElementById("close-modal").removeEventListener("click", disableModal);
    }

    function setUpModalContent() {
        setHeaderText("Add To-Do");
        setupInputs();
    }

    function setHeaderText(text) {
        document.getElementById("modal-title").textContent = text;
    }

    function setupInputs() {
        const modal = document.getElementById("modal-content");
        appendInputsToInputContainer(
            ["Name", "taskDueDate", "description"], createInputContainer(modal)
            );
    }

    function createInput(buttonName) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = buttonName;
        input.id = buttonName;
        input.className = "modal-input"
        return input;
    }

    function createInputContainer(modal) {
        let inputsContainer = document.createElement("div");
        inputsContainer.className = "modal-inputs"
        modal.appendChild(inputsContainer);
        return inputsContainer;
    }

    function appendInputsToInputContainer(buttonList, inputsContainer) {
        buttonList.forEach(buttonName => inputsContainer.appendChild(createInput(buttonName)));
    }
}

const todoFactory = function(name, taskDueDate, description) {
    this.name = name;
    this.dateCreated = new Date (new Date().getTime()).toString();
    this.taskDueDate = taskDueDate;
    this.description = description;

    return this;
}

init();

