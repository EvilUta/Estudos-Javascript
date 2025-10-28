const img = document.getElementById('img');
const wrapper = document.getElementById('wrapper');

const blurInput = document.getElementById('blur');
const colorInput = document.getElementById('color');
const spaceInput = document.getElementById('space');

let isDragging = false;
let startX, startY;
let offsetX = 0, offsetY = 0;

// 🎨 Controle de blur
blurInput.addEventListener('input', () => {
  img.style.filter = `blur(${blurInput.value}px)`;
});

// 🖌️ Controle da cor base
colorInput.addEventListener('input', () => {
  wrapper.style.backgroundColor = colorInput.value;
});

// ↕️ Controle de escala (distância)
spaceInput.addEventListener('input', () => {
  const scale = 1 + spaceInput.value / 200;
  img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
});

// 🖱️ Clique e arrasto
img.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - offsetX;
  startY = e.clientY - offsetY;
  img.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  img.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  offsetX = e.clientX - startX;
  offsetY = e.clientY - startY;

  const scale = 1 + spaceInput.value / 200;
  img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
});
