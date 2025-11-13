const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked = null;

function handleCheck(e) {
  // se Shift estiver pressionado e este checkbox estiver sendo marcado
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(box => {
      // se for o atual ou o último clicado, inverte o estado "inBetween"
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }
      // se estiver entre os dois, marca
      if (inBetween) {
        box.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox =>
  checkbox.addEventListener('click', handleCheck)
);
