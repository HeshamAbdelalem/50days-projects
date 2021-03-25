const panels = document.querySelectorAll('.panel');
console.log(panels);

function AddActiveClass() {
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      console.log('clicked');
      removeAllActiveClasses();
      panel.classList.toggle('active');
    });
  });
}
function removeAllActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
AddActiveClass();
