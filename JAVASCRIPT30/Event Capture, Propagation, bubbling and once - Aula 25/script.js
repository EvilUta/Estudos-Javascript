const boxes = document.querySelectorAll(".container");
const logBox = document.getElementById("logBox");

const modeToggle = document.getElementById("modeToggle"); 
const stopToggle = document.getElementById("stopToggle");
const onceToggle = document.getElementById("onceToggle");

let captureMode = false;
let stopEnabled = false;
let onceEnabled = false;

function log(text) {
  const div = document.createElement("div");
  div.classList.add("log-entry");
  div.textContent = text;
  logBox.appendChild(div);
  logBox.scrollTop = logBox.scrollHeight;
}

function flash(el) {
  el.classList.add("active");
  setTimeout(() => el.classList.remove("active"), 300);
}

// Remover listeners antigos e colocar novos
function updateEventListeners() {
  boxes.forEach(box => {
    box.replaceWith(box.cloneNode(true));
  });

  const newBoxes = document.querySelectorAll(".container");

  newBoxes.forEach(box => {
    box.addEventListener("click", function (e) {

      flash(this);
      log(`🔥 ${this.dataset.name}`);

      if (stopEnabled) e.stopPropagation();

    }, {
      capture: captureMode,
      once: onceEnabled
    });
  });
}

updateEventListeners();

/* ------ CONTROLS ------ */

modeToggle.addEventListener("click", () => {
  captureMode = !captureMode;
  modeToggle.textContent = captureMode ? "Modo: Capture" : "Modo: Bubbling";
  log(`--- Modo alterado: ${modeToggle.textContent} ---`);
  updateEventListeners();
});

stopToggle.addEventListener("click", () => {
  stopEnabled = !stopEnabled;
  stopToggle.textContent = stopEnabled ? "stopPropagation: ON" : "stopPropagation: OFF";
  log(`--- stopPropagation agora é: ${stopEnabled} ---`);
});

onceToggle.addEventListener("click", () => {
  onceEnabled = !onceEnabled;
  onceToggle.textContent = onceEnabled ? "once: ON" : "once: OFF";
  log(`--- once agora é: ${onceEnabled} ---`);
  updateEventListeners();
});
