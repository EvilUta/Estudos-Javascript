const textArea = document.getElementById("text");
const rate = document.getElementById("rate");
const pitch = document.getElementById("pitch");
const volume = document.getElementById("volume");

const speakBtn = document.getElementById("speak");
const pauseBtn = document.getElementById("pause");
const resumeBtn = document.getElementById("resume");
const stopBtn = document.getElementById("stop");

const indicator = document.querySelector(".indicator");
const statusLabel = document.getElementById("status");

// --- DROPDOWN CUSTOM ---
const voiceSelect = document.getElementById("voiceSelect");
const selected = voiceSelect.querySelector(".selected");
const optionsContainer = voiceSelect.querySelector(".options");

let msg = new SpeechSynthesisUtterance();
let voices = [];

// Salvar texto automaticamente
textArea.value = localStorage.getItem("speechText") || "";
textArea.addEventListener("input", () => {
  localStorage.setItem("speechText", textArea.value);
});

// POPULAR VOZES NO DROPDOWN CUSTOM
function populateVoices() {
  voices = speechSynthesis.getVoices();

  // popular lista
  optionsContainer.innerHTML = voices
    .map(v => `<div class="option" data-name="${v.name}">${v.name} (${v.lang})</div>`)
    .join("");

  if (voices.length > 0) {
    selected.textContent = voices[0].name;
    msg.voice = voices[0];
  }
}

speechSynthesis.onvoiceschanged = populateVoices;

// ABRIR/FECHAR DROPDOWN
voiceSelect.addEventListener("click", () => {
  voiceSelect.classList.toggle("open");
});

// SELECIONAR VOZ
optionsContainer.addEventListener("click", e => {
  if (e.target.classList.contains("option")) {
    const voiceName = e.target.dataset.name;

    selected.textContent = voiceName;
    voiceSelect.classList.remove("open");

    const foundVoice = voices.find(v => v.name === voiceName);
    msg.voice = foundVoice;

    // preview automático
    msg.text = "Voz selecionada: " + voiceName;
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
  }
});

// Controladores de pitch/rate/volume
function setOptions() {
  msg[this.id] = this.value;
}

rate.addEventListener("input", setOptions);
pitch.addEventListener("input", setOptions);
volume.addEventListener("input", setOptions);

// Estado visual
function setSpeaking(active) {
  indicator.classList.toggle("speaking", active);
  statusLabel.textContent = active ? "Falando..." : "Inativo";
}

// Botões
speakBtn.addEventListener("click", () => {
  msg.text = textArea.value;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
  setSpeaking(true);
});

pauseBtn.addEventListener("click", () => {
  speechSynthesis.pause();
  statusLabel.textContent = "Pausado";
});

resumeBtn.addEventListener("click", () => {
  speechSynthesis.resume();
  statusLabel.textContent = "Falando...";
});

stopBtn.addEventListener("click", () => {
  speechSynthesis.cancel();
  setSpeaking(false);
});

// Quando termina
msg.onend = () => setSpeaking(false);
