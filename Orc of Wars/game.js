const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreEl = document.getElementById("score");
const lifeEl = document.getElementById("life");

// Carregar imagens
const playerImg = new Image();
playerImg.src = "assets/player.png";
const enemyImg = new Image();
enemyImg.src = "assets/enemy.png";
const projectileImg = new Image();
projectileImg.src = "assets/projectile.png";

// Estado do jogo
let player, enemies, projectiles, keys, score, life, gameRunning;
let enemyInterval = null, gameLoopId = null;

// Direção do último movimento do jogador (default direita)
let lastDirection = { x: 1, y: 0 };

function resetGame() {
  player = { x: 380, y: 280, w: 80, h: 80, speed: 4 };
  enemies = [];
  projectiles = [];
  keys = {};
  score = 0;
  life = 100;
  gameRunning = false;
  scoreEl.textContent = score;
  lifeEl.textContent = life;
  lastDirection = { x: 1, y: 0 };

  if (enemyInterval) clearInterval(enemyInterval);
  if (gameLoopId) cancelAnimationFrame(gameLoopId);
  enemyInterval = null;
  gameLoopId = null;
}

function spawnEnemy() {
  if (!gameRunning) return;
  const side = Math.floor(Math.random() * 4);
  let x, y;
  switch (side) {
    case 0: x = Math.random() * canvas.width; y = -50; break;
    case 1: x = canvas.width + 50; y = Math.random() * canvas.height; break;
    case 2: x = Math.random() * canvas.width; y = canvas.height + 50; break;
    case 3: x = -50; y = Math.random() * canvas.height; break;
  }
  enemies.push({ x, y, w: 60, h: 60, speed: 1.2 });
}

function shoot() {
  if (!gameRunning || life <= 0) return;

  const dx = lastDirection.x;
  const dy = lastDirection.y;
  const length = Math.hypot(dx, dy) || 1;
  const dirX = dx / length;
  const dirY = dy / length;

  projectiles.push({
    x: player.x + player.w / 2 - 16,
    y: player.y + player.h / 2 - 16,
    w: 32,
    h: 32,
    speed: 10,
    dirX,
    dirY
  });
}

// Controle de teclas
document.addEventListener("keydown", e => {
  if (!gameRunning || life <= 0) return;
  keys[e.key] = true;

  if (e.key === "w") lastDirection = { x: 0, y: -1 };
  if (e.key === "s") lastDirection = { x: 0, y: 1 };
  if (e.key === "a") lastDirection = { x: -1, y: 0 };
  if (e.key === "d") lastDirection = { x: 1, y: 0 };
});

document.addEventListener("keyup", e => {
  if (!gameRunning || life <= 0) return;
  keys[e.key] = false;

  if (e.key === " ") shoot();
});

function update() {
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;

  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));

  enemies.forEach(enemy => {
    const dx = player.x - enemy.x;
    const dy = player.y - enemy.y;
    const dist = Math.hypot(dx, dy);
    enemy.x += (dx / dist) * enemy.speed;
    enemy.y += (dy / dist) * enemy.speed;
  });

  projectiles.forEach(p => {
    p.x += p.dirX * p.speed;
    p.y += p.dirY * p.speed;
  });

  // Colisão projéteis x inimigos
  for (let i = enemies.length - 1; i >= 0; i--) {
    for (let j = projectiles.length - 1; j >= 0; j--) {
      if (
        projectiles[j].x < enemies[i].x + enemies[i].w &&
        projectiles[j].x + projectiles[j].w > enemies[i].x &&
        projectiles[j].y < enemies[i].y + enemies[i].h &&
        projectiles[j].y + projectiles[j].h > enemies[i].y
      ) {
        enemies.splice(i, 1);
        projectiles.splice(j, 1);
        score += 10;
        scoreEl.textContent = score;
        break;
      }
    }
  }

  // Colisão inimigos x jogador
  enemies.forEach((enemy, i) => {
    if (
      player.x < enemy.x + enemy.w &&
      player.x + player.w > enemy.x &&
      player.y < enemy.y + enemy.h &&
      player.y + player.h > enemy.y
    ) {
      enemies.splice(i, 1);
      life -= 10;
      lifeEl.textContent = life;
      if (life <= 0) {
        gameRunning = false;
        restartBtn.disabled = false;
        keys = {};
        console.log("💀 Game Over! Sua pontuação:", score);
      }
    }
  });

  projectiles = projectiles.filter(p =>
    p.x + p.w > 0 && p.x < canvas.width &&
    p.y + p.h > 0 && p.y < canvas.height
  );
}

// Desenho do jogador com rotação
function drawPlayer() {
  const centerX = player.x + player.w / 2;
  const centerY = player.y + player.h / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  const angle = Math.atan2(lastDirection.y, lastDirection.x);
  ctx.rotate(angle);
  ctx.drawImage(playerImg, -player.w/2, -player.h/2, player.w, player.h);
  ctx.restore();
}

// Desenho dos projéteis com rotação
function drawProjectiles() {
  projectiles.forEach(p => {
    const centerX = p.x + p.w / 2;
    const centerY = p.y + p.h / 2;

    ctx.save();
    ctx.translate(centerX, centerY);
    const angle = Math.atan2(p.dirY, p.dirX);
    ctx.rotate(angle);
    ctx.drawImage(projectileImg, -p.w/2, -p.h/2, p.w, p.h);
    ctx.restore();
  });
}

// Loop de desenho
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  enemies.forEach(e => ctx.drawImage(enemyImg, e.x, e.y, e.w, e.h));
  drawProjectiles();
}

// Loop principal
function gameLoop() {
  if (gameRunning) {
    update();
    draw();
    gameLoopId = requestAnimationFrame(gameLoop);
  }
}

// Botão iniciar
startBtn.addEventListener("click", () => {
  resetGame();
  gameRunning = true;
  startBtn.disabled = true;
  restartBtn.disabled = false;
  enemyInterval = setInterval(spawnEnemy, 1000);
  gameLoop();
});

// Botão reiniciar seguro
restartBtn.addEventListener("click", () => {
  gameRunning = false;  // bloqueia entradas
  resetGame();

  setTimeout(() => {
    gameRunning = true;
    startBtn.disabled = true;
    restartBtn.disabled = false;
    enemyInterval = setInterval(spawnEnemy, 1000);
    gameLoop();
  }, 50); // evita disparo instantâneo
});
