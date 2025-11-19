const timeLeftDisplay = document.querySelector(".time-left");
const endTimeDisplay = document.querySelector(".end-time");
const historyList = document.querySelector(".history");

const progressCircle = document.querySelector(".progress-ring__progress");
const radius = 120;
const circumference = radius * 2 * Math.PI;

let countdown;
let remainingSeconds = 0;
let isPaused = false;

progressCircle.style.strokeDasharray = circumference;

function startTimer(seconds) {
  clearInterval(countdown);
  isPaused = false;
  remainingSeconds = seconds;

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  animateCircle(1);

  addToHistory(seconds);

  countdown = setInterval(() => {
    if (isPaused) return;

    remainingSeconds--;

    if (remainingSeconds <= 0) {
      clearInterval(countdown);
      finishTimer();
      return;
    }

    const percent = remainingSeconds / seconds;
    animateCircle(percent);
    displayTimeLeft(remainingSeconds);
  }, 1000);
}

function finishTimer() {
  displayTimeLeft(0);
  endTimeDisplay.textContent = "Vai ser grande o chororo!";
  animateCircle(0);

  document.title = "🔥 Tempo Acabou!";
  document.body.classList.add("flash");

  // Alarme
  const alarm = document.getElementById("alarmSound");
  alarm.currentTime = 0;   // Garantir sempre início
  alarm.volume = 1;        // Volume máximo
  alarm.play().catch(() => {
  console.log("⚠️ O navegador bloqueou o autoplay do áudio.");
});


  // Vibrar no celular
  if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const display = `${min}:${sec < 10 ? "0" : ""}${sec}`;
  timeLeftDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const h = end.getHours().toString().padStart(2, "0");
  const m = end.getMinutes().toString().padStart(2, "0");
  endTimeDisplay.textContent = `⏱ Termina às ${h}:${m}`;
}

function animateCircle(percent) {
  progressCircle.style.strokeDashoffset = circumference - percent * circumference;

  const hue = percent * 120; // Verde → Vermelho
  progressCircle.style.stroke = `hsl(${hue}, 100%, 50%)`;
}

function addToHistory(seconds) {
  const li = document.createElement("li");
  li.textContent = `Timer iniciado: ${Math.floor(seconds / 60)} min`;
  historyList.prepend(li);
}

document.querySelectorAll("[data-time]").forEach(btn => {
  btn.addEventListener("click", () => {
    startTimer(parseInt(btn.dataset.time));
  });
});

/* Custom timer */
document.querySelector(".custom").addEventListener("submit", (e) => {
  e.preventDefault();
  const mins = parseInt(document.getElementById("customMinutes").value);
  if (mins > 0) startTimer(mins * 60);
});

/* Pause / Resume / Reset */
document.getElementById("pauseBtn").onclick = () => {
  isPaused = true;
};

document.getElementById("resumeBtn").onclick = () => {
  isPaused = false;
};

document.getElementById("resetBtn").onclick = () => {
  clearInterval(countdown);
  displayTimeLeft(0);
  endTimeDisplay.textContent = "";
  animateCircle(0);
};
