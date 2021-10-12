function setUpModalTemplate(modalTitle) {
  function setHeaderText(title) {
    document.getElementById('modal-title').textContent = title;
  }

  function setModalVisibility(visibility) {
    document.getElementById('modal').style.visibility = visibility;
  }

  function disableModal() {
    setModalVisibility('hidden');
    // eslint-disable-next-line no-use-before-define
    removeModalListeners();
  }

  function removeModalListeners() {
    // eslint-disable-next-line no-unused-expressions
    window.removeEventListener('click', (e) => { (e.target.id === 'modal') ? disableModal() : null; });
    document.getElementById('close-modal').removeEventListener('click', disableModal);
    const modalContent = document.getElementById('modal-content');
    const formElements = modalContent.getElementsByTagName('form');
    while (formElements[0]) { modalContent.removeChild(formElements[0]); }
  }

  function addModalListeners() {
    // eslint-disable-next-line no-unused-expressions
    window.addEventListener('click', (e) => { (e.target.id === 'modal') ? disableModal() : null; });
    document.getElementById('close-modal').addEventListener('click', disableModal);
  }

  setModalVisibility('visible');
  addModalListeners();
  setHeaderText(modalTitle);
}

// eslint-disable-next-line import/prefer-default-export
export { setUpModalTemplate };
