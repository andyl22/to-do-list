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
        const form = createInputForm(modal);
        appendInputsToForm(["Name", "dueDate", "description"], form);
        appendSubmitToForm(form)
    }

    function createInput(buttonName) {
        const input = document.createElement("input");
        input.type = "text";
        input.required = true;
        input.placeholder = buttonName;
        input.id = buttonName.toLowerCase();
        input.className = "modal-input"
        return input;
    }

    function createInputForm(modal) {
        let inputsContainer = document.createElement("form");
        inputsContainer.className = "modal-inputs"
        modal.appendChild(inputsContainer);
        return inputsContainer;
    }

    function appendInputsToForm(buttonList, inputsContainer) {
        buttonList.forEach(buttonName => inputsContainer.appendChild(createInput(buttonName)));
    }

    function appendSubmitToForm(form) {
        const submit = document.createElement("input");
        submit.type = "submit";
        submit.addEventListener("click", function(e) {console.log(e)})
        form.appendChild(submit);
    }
}

const todoFactory = function(name, dueDate, description) {
    this.name = name;
    this.dateCreated = new Date (new Date().getTime()).toString();
    this.dueDate = dueDate;
    this.description = description;

    return this;
}

init();

