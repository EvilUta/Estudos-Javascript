// Suporte básico à API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const toggleBtn = document.getElementById("toggleBtn");
const languageSelect = document.getElementById("languageSelect");
const transcriptContainer = document.getElementById("transcript");
const statusDot = document.getElementById("statusDot");
const statusText = document.getElementById("statusText");
const unsupportedMessage = document.getElementById("unsupportedMessage");

if (!window.SpeechRecognition) {
  unsupportedMessage.style.display = "block";
  toggleBtn.disabled = true;
  toggleBtn.textContent = "Não suportado";
} else {
  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.continuous = true; // tenta manter por mais tempo
  recognition.lang = languageSelect.value;

  let isListening = false;
  let currentLine = createNewLine();

  function createNewLine() {
    const p = document.createElement("p");
    p.classList.add("line", "current");
    p.innerHTML = `<span class="tag">AO VIVO</span>`;
    transcriptContainer.appendChild(p);
    transcriptContainer.scrollTop = transcriptContainer.scrollHeight;
    return p;
  }

  function setUIListening(listening) {
    isListening = listening;

    if (listening) {
      toggleBtn.textContent = "⏸️ Pausar gravação";
      toggleBtn.classList.remove("is-paused");
      statusDot.classList.add("listening");
      statusText.textContent = "Gravando…";
    } else {
      toggleBtn.textContent = "▶️ Iniciar gravação";
      toggleBtn.classList.add("is-paused");
      statusDot.classList.remove("listening");
      statusText.textContent = "Pausado";
    }
  }

  // Inicia/parar reconhecimento
  toggleBtn.addEventListener("click", () => {
    if (!isListening) {
      try {
        recognition.start();
        setUIListening(true);
      } catch (err) {
        // em alguns browsers, chamar start() repetidamente lança erro
        console.warn("Erro ao iniciar:", err);
      }
    } else {
      recognition.stop();
      setUIListening(false);
    }
  });

  // Muda idioma
  languageSelect.addEventListener("change", () => {
    recognition.lang = languageSelect.value;
    // se estiver ouvindo, reinicia para aplicar o idioma
    if (isListening) {
      recognition.stop();
      setTimeout(() => {
        try {
          recognition.start();
        } catch (err) {
          console.warn("Erro ao reiniciar:", err);
        }
      }, 200);
    }
  });

  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    currentLine.textContent = transcript;
    currentLine.classList.add("current");
    currentLine.classList.remove("finished");

    // Comandos de voz simples
    const lower = transcript.toLowerCase();

    if (e.results[0].isFinal) {
      // Aplica comandos se forem ditos no final da frase
      if (lower.includes("limpar tudo")) {
        transcriptContainer.innerHTML = "";
      } else if (
        lower.includes("nova linha") ||
        lower.includes("próxima linha") ||
        lower.includes("proxima linha")
      ) {
        // só adiciona a linha, sem repetir o comando
      } else {
        // Marca linha como finalizada
        currentLine.classList.remove("current");
        currentLine.classList.add("finished");
        currentLine.innerHTML = `<span class="tag">OK</span> ${transcript}`;
      }

      // Cria nova linha "ao vivo"
      currentLine = createNewLine();
    }

    transcriptContainer.scrollTop = transcriptContainer.scrollHeight;
  });

  recognition.addEventListener("start", () => {
    setUIListening(true);
  });

  recognition.addEventListener("end", () => {
    // Se foi o usuário que pausou, não reiniciar
    if (!isListening) return;

    // Alguns browsers param sozinhos – tentamos manter ligado
    try {
      recognition.start();
    } catch (err) {
      console.warn("Erro ao reiniciar após end:", err);
      setUIListening(false);
    }
  });

  recognition.addEventListener("error", (e) => {
    console.error("Erro no reconhecimento:", e.error);
    setUIListening(false);
  });
}
