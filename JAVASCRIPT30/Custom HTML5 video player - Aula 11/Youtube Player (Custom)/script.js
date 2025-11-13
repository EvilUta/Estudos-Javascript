// ID do vídeo do YouTube
const YT_VIDEO_ID = "wigrizCswWw";

let player;
let progressInterval = null;

// DOM
const playPauseBtn = document.getElementById("play-pause");
const rewindBtn = document.getElementById("rewind");
const forwardBtn = document.getElementById("forward");
const timeLabel = document.getElementById("time");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const speed = document.getElementById("speed");
const fullscreenBtn = document.getElementById("fullscreen");
const videoContainer = document.getElementById("video-container");

const qualityBtn = document.getElementById("quality-btn");
const qualityMenu = document.getElementById("quality-menu");
const qualityList = document.getElementById("quality-list");

const cinemaBtn = document.getElementById("cinema-btn");
const cinemaOverlay = document.getElementById("cinema-overlay");
const videoWrapper = document.querySelector(".video-wrapper");

const exitCinemaBtn = document.getElementById("exit-cinema");

// YouTube API
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: YT_VIDEO_ID,
    playerVars: {
      controls: 0,
      rel: 0,
      modestbranding: 1,
      playsinline: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerReady() {
  player.setVolume(100);
  updateTimeLabel();
  setTimeout(() => {
    player.setPlaybackQuality("hd1080");
  }, 500);
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    playPauseBtn.textContent = "⏸";
    startProgressUpdater();
    updateQualityMenu();
  } else {
    playPauseBtn.textContent = "▶️";
    stopProgressUpdater();
  }
}

// Atualiza qualidades
function updateQualityMenu() {
  const levels = player.getAvailableQualityLevels();
  qualityList.innerHTML = "";

  const labels = {
    tiny: "144p",
    small: "240p",
    medium: "360p",
    large: "480p",
    hd720: "720p",
    hd1080: "1080p",
    hd1440: "1440p",
    hd2160: "2160p",
    highres: "Highres",
    auto: "Auto"
  };

  levels.forEach(level => {
    const li = document.createElement("li");
    li.textContent = labels[level] || level;

    li.addEventListener("click", () => {
      player.setPlaybackQuality(level);
      qualityMenu.classList.add("hidden");
    });

    qualityList.appendChild(li);
  });
}

qualityBtn.addEventListener("click", () => {
  qualityMenu.classList.toggle("hidden");
});

document.addEventListener("click", e => {
  if (!qualityMenu.contains(e.target) && e.target !== qualityBtn) {
    qualityMenu.classList.add("hidden");
  }
});

// Progress bar
function startProgressUpdater() {
  stopProgressUpdater();
  progressInterval = setInterval(() => {
    updateTimeLabel();
    updateProgressBar();
  }, 500);
}

function stopProgressUpdater() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

function formatTime(sec) {
  sec = Math.floor(sec);
  return `${String(Math.floor(sec / 60)).padStart(2, "0")}:${String(sec % 60).padStart(2, "0")}`;
}

function updateTimeLabel() {
  timeLabel.textContent = `${formatTime(player.getCurrentTime())} / ${formatTime(player.getDuration())}`;
}

function updateProgressBar() {
  progress.value = (player.getCurrentTime() / player.getDuration()) * 100;
}

progress.addEventListener("input", () => {
  player.seekTo((progress.value / 100) * player.getDuration(), true);
});

// Controles
playPauseBtn.addEventListener("click", () => {
  if (player.getPlayerState() === YT.PlayerState.PLAYING) player.pauseVideo();
  else player.playVideo();
});

rewindBtn.addEventListener("click", () => {
  player.seekTo(Math.max(0, player.getCurrentTime() - 10), true);
});

forwardBtn.addEventListener("click", () => {
  player.seekTo(Math.min(player.getDuration(), player.getCurrentTime() + 10), true);
});

volume.addEventListener("input", () => {
  player.setVolume(Number(volume.value));
});

speed.addEventListener("change", () => {
  player.setPlaybackRate(Number(speed.value));
});

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) videoContainer.requestFullscreen();
  else document.exitFullscreen();
});

// CINEMA MODE
let cinemaMode = false;

cinemaBtn.addEventListener("click", toggleCinema);
exitCinemaBtn.addEventListener("click", toggleCinema);

function toggleCinema() {
  cinemaMode = !cinemaMode;

  if (cinemaMode) {
    videoWrapper.classList.add("cinema-mode");
    cinemaOverlay.classList.add("active");

    exitCinemaBtn.classList.remove("hidden");
    setTimeout(() => exitCinemaBtn.classList.add("visible"), 10);

    const levels = player.getAvailableQualityLevels();
    if (levels.includes("hd2160")) player.setPlaybackQuality("hd2160");
    else if (levels.includes("hd1440")) player.setPlaybackQuality("hd1440");
    else if (levels.includes("hd1080")) player.setPlaybackQuality("hd1080");
    else if (levels.includes("hd720")) player.setPlaybackQuality("hd720");

  } else {
    videoWrapper.classList.remove("cinema-mode");
    cinemaOverlay.classList.remove("active");

    exitCinemaBtn.classList.remove("visible");
    setTimeout(() => exitCinemaBtn.classList.add("hidden"), 200);
  }
}
