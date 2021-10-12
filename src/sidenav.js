const growAnimation = function () {
  document.getElementById('nav-bar').animate(
    { opacity: [0, 0.3, 1] },
    {
      duration: 150,
    },
  );
};

const shrinkAnimation = function () {
  document.getElementById('nav-bar').animate(
    { opacity: [1, 0.3, 0] },
    {
      duration: 150,
    },
  ).onfinish = function () { document.getElementById('nav-bar').style.display = 'none'; };
};

function toggleList() {
  const navBar = document.getElementById('nav-bar');
  if (navBar.style.display === '' || navBar.style.display === 'none') {
    document.getElementById('nav-bar').style.display = 'flex';
    growAnimation();
  } else {
    shrinkAnimation();
  }
}

function projectDropdown() {
  const dropdownContainer = document.querySelector('.projects-container');
  const projectsListContainer = document.querySelector('.projects-list-container');
  if (dropdownContainer.style.display === '' || dropdownContainer.style.display === 'none') {
    dropdownContainer.style.display = 'flex';
    document.querySelectorAll('.projects-list-container button').forEach((button) => {
      button.classList.add('active');
    });
  } else {
    dropdownContainer.style.display = 'none';
    projectsListContainer.classList.remove('active');
    document.querySelectorAll('.projects-list-container button').forEach((button) => {
      button.classList.remove('active');
    });
  }
}

export { projectDropdown, toggleList };
