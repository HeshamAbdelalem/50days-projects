const panels = document.querySelectorAll('.panel');

function addActiveClasses() {
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      console.log(`you clicked`);
      panel.classList.toggle('active');
    });
  });
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
addActiveClasses();
