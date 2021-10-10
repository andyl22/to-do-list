function setUpModalTemplate(modalTitle) {
    setModalVisibility("visible");
    addModalListeners();
    setHeaderText(modalTitle);

    function setHeaderText(modalTitle) {
        document.getElementById("modal-title").textContent = modalTitle;
    }

    function setModalVisibility(visibility) {
        document.getElementById("modal").style.visibility = visibility;
    }

    function addModalListeners() {
        window.addEventListener("click", function (e) { (e.target.id == "modal") ? disableModal() : null; });
        document.getElementById("close-modal").addEventListener("click", disableModal);
    }

    function disableModal() {
        setModalVisibility("hidden");
        removeModalListeners();
    }

    function removeModalListeners() {
        window.removeEventListener("click", function (e) { (e.target.id == "modal") ? disableModal() : null; });
        document.getElementById("close-modal").removeEventListener("click", disableModal);
        const modalContent = document.getElementById("modal-content");
        let formElements = modalContent.getElementsByTagName("form");
        while (formElements[0]) {modalContent.removeChild(formElements[0])};
    }
}

export {setUpModalTemplate};