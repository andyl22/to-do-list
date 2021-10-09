import "./index.css"

if (process.env.NODE_ENV == 'production') {
    console.log('Production mode!');
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode!');
}

function init() {
    displayTasks(true);
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


    //Create input boxes in modal
    function setupInputs() {
        const modal = document.getElementById("modal-content");
        const form = createInputForm(modal);
        appendInputsToForm([["Name","text"], ["Date", "date"], ["Description", "text"]], form);
        appendSubmitToForm(form)
    }

    function createInput(buttonName, type) {
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

    function createInputForm(modal) {
        let inputsContainer = document.createElement("form");
        inputsContainer.className = "modal-inputs"
        modal.appendChild(inputsContainer);
        return inputsContainer;
    }

    function appendInputsToForm(inputList, inputsContainer) {
        inputList.forEach(button => {
            let inputName = button[0];
            let type = button[1];
            const inputAndLabel = createInput(inputName, type);
            const label = inputAndLabel[0];
            const input = inputAndLabel[1];
            inputsContainer.appendChild(label);
            inputsContainer.appendChild(input);
        });
    }

    function appendSubmitToForm(form) {
        const submit = document.createElement("input");
        submit.type = "submit";
        submit.addEventListener("click", createToDo);
        form.appendChild(submit);
    }

    function createToDo(e) {
        e.preventDefault();
        let [name, duedate, description] = getInputValues();
        let taskElement = todoFactory(name, duedate, description);
        localStorage.setItem("id"+localStorage.length, JSON.stringify(taskElement));
        displayTasks();
        cleanInputs();
    }

    function getInputValues() {
        let name = document.getElementById("name").value;
        console.log(name);
        let date = document.getElementById("date").value;
        console.log(date);
        let description = document.getElementById("description").value;
        console.log(description);
        return [name, date, description];
    }

    function cleanInputs() {
        document.getElementById("name").value = "";
        document.getElementById("date").value  = "";
        document.getElementById("description").value  = "";
    }
}

function displayTasks(bypass=false) {
    for (let i=0; i<localStorage.length; i++) {
        let taskElement = JSON.parse(localStorage.getItem("id"+i));
        console.log(taskElement);
        if (taskElement.displayed == false || bypass == true) {
            let taskDiv = document.createElement("div");
            taskDiv.className = "task-container";
            let name = document.createElement("h3");
            let dueDate = document.createElement("p");
            let description = document.createElement("p");
            name.textContent = taskElement.name
            dueDate.textContent = taskElement.dueDate
            description.textContent = taskElement.name
            taskDiv.appendChild(name);
            taskDiv.appendChild(dueDate);
            taskDiv.appendChild(description);
            let currentDate = new Date().toISOString().split('T')[0];
            let taskDate = taskElement.dueDate;
            const msToSeconds = (1000*60*60*24);
            let currentTimeDifference = (new Date(currentDate) - new Date(taskDate))/ msToSeconds;
            (currentTimeDifference<-3) ? document.getElementById("priority-one").appendChild(taskDiv) :
            (currentTimeDifference<5) ? document.getElementById("priority-two").appendChild(taskDiv) :
            document.getElementById("priority-three").appendChild(taskDiv)
            taskElement.displayed = true;
            localStorage.removeItem("id"+i);
            localStorage.setItem("id"+i, JSON.stringify(taskElement));
        }
    }
}

const todoFactory = function(name, dueDate, description) {
    let task = {};
    task.name = name;
    task.dueDate = dueDate;
    task.description = description;
    task.displayed = false;
    task.createdDate = new Date(Date.now()).toString();

    return task;
}

init();
