// elemento "pai" que vamos escutar o mouse
const hero = document.querySelector(".hero");
// texto que ganhará a sombra maluca
const text = hero.querySelector("h1");

// quanto a sombra pode "andar"
const walk = 100; // em px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // ajusta quando o alvo não é diretamente o .hero (ex: o h1)
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // transforma posição do mouse (0 → width/height) em (-walk/2 → walk/2)
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  // múltiplas sombras coloridas, tipo efeito neon / 3D
  text.style.textShadow = `
    ${xWalk}px ${yWalk * -1}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
