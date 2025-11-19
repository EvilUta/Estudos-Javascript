const navLinks = document.querySelectorAll("nav a");
const modeSelect = document.getElementById("modeSelect");

// Criar highlight
const highlight = document.createElement("span");
highlight.classList.add("highlight", "box"); // modo inicial
document.body.appendChild(highlight);

let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;
let lerpActive = true; // animação suave

function lerp(a, b, n = 0.15) {
  return a + (b - a) * n;
}

// Atualiza visual ao mudar modo
modeSelect.addEventListener("change", () => {
  highlight.className = "highlight " + modeSelect.value;
});

// Evento ao passar mouse nos links
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => moveHighlight(link));
});

function moveHighlight(link) {
  const coords = link.getBoundingClientRect();

  // Definir tamanho
  highlight.style.width = `${coords.width}px`;

  // Se underline → trava altura
  if (!highlight.classList.contains("underline")) {
    highlight.style.height = `${coords.height}px`;
  }

  targetX = coords.left;
  targetY = coords.top;
}

function animate() {
  if (lerpActive) {
    currentX = lerp(currentX, targetX);
    currentY = lerp(currentY, targetY);
    highlight.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  requestAnimationFrame(animate);
}

animate();
