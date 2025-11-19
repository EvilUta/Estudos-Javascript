const moles = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const messageDisplay = document.getElementById("message");
const startButton = document.getElementById("start");

let score = 0;
let lives = 3;
let activeMoles = [];
let gameOver = false;

let baseDuration = 1200;      // tempo inicial que a topeira fica exposta
let difficultyIncrease = 0;   // vai reduzindo a duração
let spawnRate = 1200;         // tempo entre os spawns
let spawnTimer = null;

// Atualiza o texto de vidas
function updateLivesText() {
  if (lives <= 0) {
    livesDisplay.textContent = "✖✖✖";
    return;
  }
  const hearts = "❤❤❤".slice(0, lives);
  const empties = "✖✖✖".slice(0, 3 - lives);
  livesDisplay.textContent = hearts + empties;
}

// Escolhe N buracos diferentes
function getRandomHoles(amount) {
  const arr = [...moles];
  const chosen = [];
  
  for (let i = 0; i < amount; i++) {
    if (arr.length === 0) break;
    const idx = Math.floor(Math.random() * arr.length);
    chosen.push(arr[idx]);
    arr.splice(idx, 1); // remove pra não repetir o mesmo buraco
  }

  return chosen;
}

function showMoles() {
  if (gameOver) return;

  // quantidade de topeiras simultâneas: 1 a 3
  const amount = Math.floor(Math.random() * 3) + 1;
  const holes = getRandomHoles(amount);

  activeMoles = [];

  holes.forEach((mole) => {
    mole.classList.remove("hidden");
    mole.classList.add("up");
    mole.dataset.whacked = "false";

    mole.addEventListener("click", handleWhack);
    activeMoles.push(mole);

    const duration = Math.max(350, baseDuration - difficultyIncrease);

    setTimeout(() => {
      if (mole.dataset.whacked === "false") {
        lives--;
        updateLivesText();

        if (lives <= 0) {
          endGame();
        }
      }

      hideMole(mole);
    }, duration);
  });

  difficultyIncrease += 15; // aumenta a dificuldade gradualmente

  spawnTimer = setTimeout(showMoles, Math.max(350, spawnRate - difficultyIncrease));
}

function hideMole(mole) {
  mole.classList.remove("up");
  mole.classList.add("hidden");
  mole.removeEventListener("click", handleWhack);
}

function handleWhack(e) {
  if (gameOver) return;
  const mole = e.currentTarget;

  if (mole.dataset.whacked === "true") return;

  mole.dataset.whacked = "true";
  score++;
  scoreDisplay.textContent = score;

  hideMole(mole);

  messageDisplay.textContent = "Acertou!";
  messageDisplay.className = "message-tip";
}

function startGame() {
  clearTimeout(spawnTimer);

  // Reset de estado
  score = 0;
  lives = 3;
  difficultyIncrease = 0;
  gameOver = false;

  scoreDisplay.textContent = score;
  updateLivesText();
  messageDisplay.textContent = "Jogo iniciado!";
  messageDisplay.className = "message-tip";

  // Esconde tudo antes de começar
  moles.forEach((m) => hideMole(m));

  showMoles();
}

function endGame() {
  gameOver = true;
  clearTimeout(spawnTimer);

  moles.forEach((m) => hideMole(m));

  messageDisplay.textContent = `Fim do jogo! Pontos: ${score}`;
  messageDisplay.className = "message-game-over";
}

startButton.addEventListener("click", startGame);
