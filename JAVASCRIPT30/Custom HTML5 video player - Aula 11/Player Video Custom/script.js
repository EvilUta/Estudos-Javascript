const video = document.getElementById("video");
const playPauseBtn = document.getElementById("play-pause");
const timeLabel = document.getElementById("time");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const fullscreenBtn = document.getElementById("fullscreen");
const container = document.querySelector(".video-container");

// Formata tempo (segundos) -> "mm:ss"
function formatTime(time) {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

// Atualiza o label de tempo
function updateTime() {
  const current = formatTime(video.currentTime);
  const total = formatTime(video.duration);
  timeLabel.textContent = `${current} / ${total}`;
}

// Play / pause
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

// Atualiza ícone do botão
video.addEventListener("play", () => {
  playPauseBtn.textContent = "⏸";
});

video.addEventListener("pause", () => {
  playPauseBtn.textContent = "▶️";
});

playPauseBtn.addEventListener("click", togglePlay);

// Clique no próprio vídeo também dá play/pause
video.addEventListener("click", togglePlay);

// Atualiza tempo e barra de progresso
video.addEventListener("timeupdate", () => {
  updateTime();
  if (!isNaN(video.duration)) {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
  }
});

// Quando o metadata carregar, já atualiza o tempo total
video.addEventListener("loadedmetadata", () => {
  updateTime();
});

// Seek ao mexer na barra de progresso
progress.addEventListener("input", () => {
  if (!isNaN(video.duration)) {
    const newTime = (progress.value / 100) * video.duration;
    video.currentTime = newTime;
  }
});

// Volume
volume.addEventListener("input", () => {
  video.volume = Number(volume.value);
});

// Velocidade
speed.addEventListener("change", () => {
  video.playbackRate = Number(speed.value);
});

// Fullscreen
fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    }
  } else {
    document.exitFullscreen();
  }
});
