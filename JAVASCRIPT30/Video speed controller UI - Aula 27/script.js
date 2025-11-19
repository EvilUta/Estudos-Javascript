const video = document.querySelector(".video");
const track = document.querySelector(".speed-track");
const bar = document.querySelector(".speed-bar");
const tooltip = document.querySelector(".tooltip");

let min = 0.25;
let max = 4;
let isDragging = false;

function updateSpeed(clientY) {
  const rect = track.getBoundingClientRect();
  let y = clientY - rect.top;
  let percent = Math.min(Math.max(y / rect.height, 0), 1);

  let rate = (percent * (max - min)) + min;

  bar.style.height = `${percent * 100}%`;

  // gradiente animado dependendo da velocidade
  bar.style.background = `
    linear-gradient(180deg,
      hsl(${Math.floor(percent * 180)}, 100%, 55%),
      hsl(${Math.floor(percent * 180)}, 100%, 40%)
    )
  `;

  tooltip.textContent = `${rate.toFixed(2)}x`;
  tooltip.style.top = `${percent * 100}%`;

  video.playbackRate = rate;
}

/* Mouse arrastando */
track.addEventListener("mousedown", (e) => {
  isDragging = true;
  updateSpeed(e.clientY);
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) updateSpeed(e.clientY);
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

/* Scroll com mouse */
track.addEventListener("wheel", (e) => {
  e.preventDefault();
  let delta = e.deltaY > 0 ? -0.1 : 0.1;
  let newRate = Math.min(Math.max(video.playbackRate + delta, min), max);

  let percent = (newRate - min) / (max - min);
  updateSpeed(track.getBoundingClientRect().top + percent * track.offsetHeight);
});

/* Suporte a TOUCH para celular */
track.addEventListener("touchmove", (e) => {
  updateSpeed(e.touches[0].clientY);
});
